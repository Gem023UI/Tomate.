import React, { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import '../styles/Analytics.css';

export default function AnalyticsPage() {
  const [selectedMetric, setSelectedMetric] = useState('accuracy');
  
  return (
    <MainLayout>
        <div className="analytics-wrapper">
      {/* Hero Section */}
      <section className="analytics-hero">
        <div className="analytics-hero-content">
          <h1>Research Analytics Dashboard</h1>
          <p>Comprehensive insights and performance metrics from our tomato disease detection model</p>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="metrics-section">
        <div className="metrics-container">
          <div className="metric-card">
            <div className="metric-icon">📊</div>
            <h3>Overall Accuracy</h3>
            <p className="metric-value">94.7%</p>
            <span className="metric-change positive">+2.3% from baseline</span>
          </div>
          
          <div className="metric-card">
            <div className="metric-icon">🎯</div>
            <h3>Precision</h3>
            <p className="metric-value">92.1%</p>
            <span className="metric-change positive">+1.8% improvement</span>
          </div>
          
          <div className="metric-card">
            <div className="metric-icon">🔍</div>
            <h3>Recall</h3>
            <p className="metric-value">91.5%</p>
            <span className="metric-change positive">+3.1% improvement</span>
          </div>
          
          <div className="metric-card">
            <div className="metric-icon">⚡</div>
            <h3>F1 Score</h3>
            <p className="metric-value">91.8%</p>
            <span className="metric-change positive">+2.5% improvement</span>
          </div>
        </div>
      </section>

      {/* Model Performance Graphs */}
      <section className="graphs-section">
        <h2 className="section-heading">Model Performance Analysis</h2>
        
        <div className="graphs-grid">
          <div className="graph-card large">
            <div className="graph-header">
              <h3>Training & Validation Accuracy Over Epochs</h3>
              <select 
                className="graph-filter"
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
              >
                <option value="accuracy">Accuracy</option>
                <option value="loss">Loss</option>
                <option value="precision">Precision</option>
              </select>
            </div>
            <div className="graph-placeholder">
              <img src="/mlgraph.png" alt="Accuracy Graph" />
            </div>
          </div>
          
          <div className="graph-card">
            <div className="graph-header">
              <h3>Confusion Matrix</h3>
            </div>
            <div className="graph-placeholder">
              <img src="/mlgraph.png" alt="Confusion Matrix" />
            </div>
          </div>
          
          <div className="graph-card">
            <div className="graph-header">
              <h3>ROC Curve</h3>
            </div>
            <div className="graph-placeholder">
              <img src="/mlgraph.png" alt="ROC Curve" />
            </div>
          </div>
        </div>
      </section>

      {/* Disease Detection Statistics */}
      <section className="statistics-section">
        <h2 className="section-heading">Disease Detection Statistics</h2>
        
        <div className="stats-grid">
          <div className="stat-card">
            <h4>Early Blight</h4>
            <div className="stat-bar">
              <div className="stat-fill" style={{width: '95%'}}></div>
            </div>
            <p className="stat-percentage">95% Detection Rate</p>
          </div>
          
          <div className="stat-card">
            <h4>Anthracnose</h4>
            <div className="stat-bar">
              <div className="stat-fill" style={{width: '92%'}}></div>
            </div>
            <p className="stat-percentage">92% Detection Rate</p>
          </div>
          
          <div className="stat-card">
            <h4>Fusarium Wilt</h4>
            <div className="stat-bar">
              <div className="stat-fill" style={{width: '94%'}}></div>
            </div>
            <p className="stat-percentage">94% Detection Rate</p>
          </div>
          
          <div className="stat-card">
            <h4>Powdery Mildew</h4>
            <div className="stat-bar">
              <div className="stat-fill" style={{width: '89%'}}></div>
            </div>
            <p className="stat-percentage">89% Detection Rate</p>
          </div>
          
          <div className="stat-card">
            <h4>Septoria Leaf Spot</h4>
            <div className="stat-bar">
              <div className="stat-fill" style={{width: '93%'}}></div>
            </div>
            <p className="stat-percentage">93% Detection Rate</p>
          </div>
          
          <div className="stat-card">
            <h4>Bacterial Spot</h4>
            <div className="stat-bar">
              <div className="stat-fill" style={{width: '91%'}}></div>
            </div>
            <p className="stat-percentage">91% Detection Rate</p>
          </div>
        </div>
      </section>

      {/* Data Distribution */}
      <section className="distribution-section">
        <h2 className="section-heading">Dataset Distribution</h2>
        
        <div className="distribution-container">
          <div className="distribution-card">
            <h3>Training Data Composition</h3>
            <div className="graph-placeholder">
              <img src="/mlgraph.png" alt="Training Data Distribution" />
            </div>
            <div className="data-summary">
              <div className="summary-item">
                <span className="summary-label">Total Images:</span>
                <span className="summary-value">15,240</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Diseases Covered:</span>
                <span className="summary-value">13</span>
              </div>
            </div>
          </div>
          
          <div className="distribution-card">
            <h3>Test Set Performance</h3>
            <div className="graph-placeholder">
              <img src="/mlgraph.png" alt="Test Set Performance" />
            </div>
            <div className="data-summary">
              <div className="summary-item">
                <span className="summary-label">Test Images:</span>
                <span className="summary-value">3,810</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Avg Confidence:</span>
                <span className="summary-value">87.3%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Findings */}
      <section className="findings-section">
        <h2 className="section-heading">Key Research Findings</h2>
        
        <div className="findings-grid">
          <div className="finding-card">
            <div className="finding-number">01</div>
            <h3>Multi-Angle Detection</h3>
            <p>Analysis from multiple image angles improved detection accuracy by 12% compared to single-view analysis, particularly effective for early-stage disease identification.</p>
          </div>
          
          <div className="finding-card">
            <div className="finding-number">02</div>
            <h3>Model Optimization</h3>
            <p>Transfer learning with pre-trained CNN models reduced training time by 40% while maintaining high accuracy levels across all disease categories.</p>
          </div>
          
          <div className="finding-card">
            <div className="finding-number">03</div>
            <h3>Real-Time Performance</h3>
            <p>Average inference time of 1.2 seconds per image allows for practical real-time disease detection in field conditions with mobile deployment.</p>
          </div>
          
          <div className="finding-card">
            <div className="finding-number">04</div>
            <h3>Dataset Augmentation</h3>
            <p>Data augmentation techniques including rotation, scaling, and color jittering increased model robustness by 18% in varying lighting conditions.</p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison-section">
        <h2 className="section-heading">Model Comparison Analysis</h2>
        
        <div className="table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Model Architecture</th>
                <th>Accuracy</th>
                <th>Precision</th>
                <th>Recall</th>
                <th>Training Time</th>
                <th>Parameters</th>
              </tr>
            </thead>
            <tbody>
              <tr className="highlight-row">
                <td><strong>TomatoGuard CNN (Final)</strong></td>
                <td>94.7%</td>
                <td>92.1%</td>
                <td>91.5%</td>
                <td>2.3 hrs</td>
                <td>23.5M</td>
              </tr>
              <tr>
                <td>ResNet-50</td>
                <td>91.2%</td>
                <td>89.4%</td>
                <td>88.7%</td>
                <td>3.1 hrs</td>
                <td>25.6M</td>
              </tr>
              <tr>
                <td>VGG-16</td>
                <td>88.5%</td>
                <td>86.2%</td>
                <td>85.9%</td>
                <td>4.2 hrs</td>
                <td>138M</td>
              </tr>
              <tr>
                <td>MobileNet V2</td>
                <td>86.3%</td>
                <td>84.1%</td>
                <td>83.5%</td>
                <td>1.5 hrs</td>
                <td>3.4M</td>
              </tr>
              <tr>
                <td>Custom Baseline</td>
                <td>82.1%</td>
                <td>79.8%</td>
                <td>78.2%</td>
                <td>1.8 hrs</td>
                <td>12.3M</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Download Section */}
      <section className="download-section">
        <div className="download-card">
          <h2>Download Full Research Report</h2>
          <p>Access comprehensive analytics data, methodology, and detailed findings from our tomato disease detection research.</p>
          <button className="download-btn">Download PDF Report</button>
        </div>
      </section>
    </div>
    </MainLayout>
  );
}