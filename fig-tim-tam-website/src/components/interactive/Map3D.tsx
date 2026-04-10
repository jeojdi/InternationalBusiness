'use client'
import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

interface FigLocation {
  name: string
  coords: [number, number]
  variety: string
  description: string
}

const figLocations: FigLocation[] = [
  {
    name: 'Kakadu National Park, NT',
    coords: [132.5, -12.6],
    variety: 'Cluster Fig (Ficus racemosa)',
    description: 'Traditional food source for 40,000+ years. Sweet, honey-like flavor used by Indigenous communities.',
  },
  {
    name: 'Daintree, Queensland',
    coords: [145.3, -16.2],
    variety: 'Strangler Fig (Ficus watkinsiana)',
    description: 'Tropical rainforest species with unique growth pattern. Rich, earthy flavor profile.',
  },
  {
    name: 'Byron Bay, NSW',
    coords: [153.6, -28.6],
    variety: 'Moreton Bay Fig (Ficus macrophylla)',
    description: 'Iconic coastal fig with massive canopy. Sweet and succulent fruit.',
  },
  {
    name: 'Grampians, Victoria',
    coords: [142.5, -37.2],
    variety: 'Rock Fig (Ficus platypoda)',
    description: 'Hardy fig species adapted to temperate climates. Robust flavor.',
  },
  {
    name: 'Kimberley, WA',
    coords: [124.3, -17.5],
    variety: 'Desert Fig (Ficus brachypoda)',
    description: 'Drought-resistant species of the arid interior. Concentrated sweetness.',
  },
]

// Map configuration constants
const MAP_CONFIG = {
  CENTER: [133.7751, -25.2744] as [number, number], // Australia center
  ZOOM: 4,
  PITCH: 60,
  BEARING: 0,
} as const

const TERRAIN_CONFIG = {
  TILE_SIZE: 512,
  MAX_ZOOM: 14,
  EXAGGERATION: 1.5,
} as const

const FOG_CONFIG = {
  COLOR: 'rgb(186, 210, 235)',
  HIGH_COLOR: 'rgb(36, 92, 223)',
  HORIZON_BLEND: 0.02,
} as const

const MARKER_STYLES = {
  BACKGROUND_COLOR: '#D4AF37',
  WIDTH: '30px',
  HEIGHT: '30px',
  BORDER_RADIUS: '50%',
  BORDER: '3px solid white',
  BOX_SHADOW: '0 2px 8px rgba(0,0,0,0.3)',
} as const

export default function Map3D() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [selectedLocation, setSelectedLocation] = useState<FigLocation | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!mapContainer.current || map.current) return

    const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
    if (!mapboxToken) {
      setError('Map configuration error. Please contact support.')
      setIsLoading(false)
      console.error('Mapbox token not configured. Please add NEXT_PUBLIC_MAPBOX_TOKEN to .env file.')
      return
    }

    mapboxgl.accessToken = mapboxToken

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/outdoors-v12',
        center: MAP_CONFIG.CENTER,
        zoom: MAP_CONFIG.ZOOM,
        pitch: MAP_CONFIG.PITCH,
        bearing: MAP_CONFIG.BEARING,
      })
    } catch (err) {
      setError('Failed to initialize map')
      setIsLoading(false)
      console.error('Map initialization error:', err)
      return
    }

    map.current.on('load', () => {
      if (!map.current) return

      setIsLoading(false)

      // Enable 3D terrain
      map.current.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: TERRAIN_CONFIG.TILE_SIZE,
        maxzoom: TERRAIN_CONFIG.MAX_ZOOM,
      })
      map.current.setTerrain({ source: 'mapbox-dem', exaggeration: TERRAIN_CONFIG.EXAGGERATION })

      // Add sky
      map.current.setFog({
        color: FOG_CONFIG.COLOR,
        'high-color': FOG_CONFIG.HIGH_COLOR,
        'horizon-blend': FOG_CONFIG.HORIZON_BLEND,
      })

      // Add markers
      figLocations.forEach((location) => {
        const el = document.createElement('div')
        el.className = 'marker'
        el.style.backgroundColor = MARKER_STYLES.BACKGROUND_COLOR
        el.style.width = MARKER_STYLES.WIDTH
        el.style.height = MARKER_STYLES.HEIGHT
        el.style.borderRadius = MARKER_STYLES.BORDER_RADIUS
        el.style.border = MARKER_STYLES.BORDER
        el.style.cursor = 'pointer'
        el.style.boxShadow = MARKER_STYLES.BOX_SHADOW

        const marker = new mapboxgl.Marker(el)
          .setLngLat(location.coords as [number, number])
          .addTo(map.current!)

        el.addEventListener('click', () => {
          setSelectedLocation(location)
        })
      })
    })

    map.current.on('error', (e) => {
      setError('Map failed to load. Please try refreshing the page.')
      setIsLoading(false)
      console.error('Map error:', e)
    })

    return () => {
      map.current?.remove()
    }
  }, [])

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-2xl">
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-cream z-10">
          <div className="text-center p-6">
            <p className="text-charcoal font-semibold mb-2">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 bg-aussie-gold text-charcoal px-4 py-2 rounded-md hover:bg-fig-purple hover:text-white transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )}
      {isLoading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-cream z-10">
          <div className="text-center">
            <div className="inline-block w-8 h-8 border-4 border-fig-purple border-t-transparent rounded-full animate-spin mb-2"></div>
            <p className="text-charcoal">Loading interactive map...</p>
          </div>
        </div>
      )}
      <div ref={mapContainer} className="w-full h-full" />

      {selectedLocation && (
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-2xl p-6 max-w-sm animate-in fade-in slide-in-from-right">
          <button
            onClick={() => setSelectedLocation(null)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl w-8 h-8 flex items-center justify-center"
            aria-label="Close"
          >
            ×
          </button>
          <h3 className="text-xl font-bold text-fig-purple mb-2">
            {selectedLocation.name}
          </h3>
          <p className="text-lg font-semibold text-sage-green mb-2">{selectedLocation.variety}</p>
          <p className="text-gray-600">{selectedLocation.description}</p>
        </div>
      )}

      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <p className="text-sm font-semibold text-charcoal mb-1">Interactive 3D Map</p>
        <p className="text-xs text-gray-600">Click golden markers to learn about native figs</p>
      </div>
    </div>
  )
}
