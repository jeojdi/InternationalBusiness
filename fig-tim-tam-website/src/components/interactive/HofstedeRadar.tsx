'use client'
import { useState } from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'

const hofstedeData = [
  { dimension: 'Power Distance', score: 36, shortName: 'PDI' },
  { dimension: 'Individualism', score: 90, shortName: 'IDV' },
  { dimension: 'Masculinity', score: 61, shortName: 'MAS' },
  { dimension: 'Uncertainty Avoidance', score: 51, shortName: 'UAI' },
  { dimension: 'Long-Term Orientation', score: 21, shortName: 'LTO' },
  { dimension: 'Indulgence', score: 71, shortName: 'IND' },
]

type DimensionKey = 'Power Distance' | 'Individualism' | 'Masculinity' | 'Uncertainty Avoidance' | 'Long-Term Orientation' | 'Indulgence'

const dimensionDetails: Record<DimensionKey, { meaning: string; marketing: string[] }> = {
  'Power Distance': {
    meaning: 'Australians prefer equality and accessible leadership. Low power distance (36) means hierarchies are flat and bosses are approachable.',
    marketing: ['Use first names in communications', 'Avoid hierarchical messaging', 'Emphasize accessibility and equality'],
  },
  'Individualism': {
    meaning: 'Extremely high individualism (90) - Australians value personal choice, self-reliance, and individual rewards.',
    marketing: ['Focus on personal benefits', 'Use "you" messaging', 'Highlight individual enjoyment and choice'],
  },
  'Masculinity': {
    meaning: 'Moderate masculinity (61) - Australians value achievement but also quality of life and work-life balance.',
    marketing: ['Balance achievement with lifestyle', 'Show both ambition and leisure', 'Appeal to success and enjoyment'],
  },
  'Uncertainty Avoidance': {
    meaning: 'Moderate uncertainty avoidance (51) - Australians are comfortable with some ambiguity and change.',
    marketing: ['Embrace innovation', 'Don\'t overpromise certainty', 'Be transparent about what you offer'],
  },
  'Long-Term Orientation': {
    meaning: 'Low long-term orientation (21) - Australians prefer quick results and immediate gratification.',
    marketing: ['Emphasize immediate benefits', 'Focus on present enjoyment', 'Avoid long-term commitment messaging'],
  },
  'Indulgence': {
    meaning: 'High indulgence (71) - Australians give themselves permission to indulge guilt-free and enjoy life.',
    marketing: ['Use bright, joyful visuals', 'Frame as uncomplicated reward', 'Outdoor lifestyle imagery'],
  },
}

export default function HofstedeRadar() {
  const [selectedDimension, setSelectedDimension] = useState<DimensionKey | null>(null)

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={hofstedeData}>
            <PolarGrid stroke="#7C9885" />
            <PolarAngleAxis dataKey="shortName" style={{ fontSize: '14px', fontWeight: 'bold' }} />
            <PolarRadiusAxis angle={90} domain={[0, 100]} />
            <Radar
              name="Australia"
              dataKey="score"
              stroke="#5D3A6B"
              fill="#5D3A6B"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-3 gap-2 mt-4">
          {hofstedeData.map((item) => (
            <button
              key={item.dimension}
              onClick={() => setSelectedDimension(item.dimension as DimensionKey)}
              aria-label={`View ${item.dimension} dimension details`}
              className={`p-2 rounded transition-colors text-sm font-semibold ${
                selectedDimension === item.dimension
                  ? 'bg-fig-purple text-white'
                  : 'bg-cream hover:bg-sage-green hover:text-white'
              }`}
            >
              {item.shortName}: {item.score}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        {selectedDimension ? (
          <>
            <h3 className="text-2xl font-bold text-fig-purple mb-4">
              {selectedDimension}
              <span className="text-lg ml-2 text-sage-green">
                ({hofstedeData.find(d => d.dimension === selectedDimension)?.score})
              </span>
            </h3>
            <p className="text-gray-700 mb-6">
              {dimensionDetails[selectedDimension]?.meaning}
            </p>
            <h4 className="font-bold text-lg mb-3 text-aussie-gold">Marketing Implications:</h4>
            <ul className="space-y-2">
              {dimensionDetails[selectedDimension]?.marketing.map((tip, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-sage-green mr-2 font-bold">✓</span>
                  <span className="text-gray-600">{tip}</span>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400 text-center text-lg">
              👆 Click on a dimension above to see details
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
