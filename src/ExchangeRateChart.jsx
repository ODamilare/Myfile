import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const ExchangeRateChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.date),
        datasets: [
            {
                label: '',
                data: data.map(item => item.rate),
                fill: false,
                borderColor: '#4CAF50',
                backgroundColor: '#198754',
                pointBackgroundColor: '#4CAF50',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 5,
                tension: 0.3,
                borderWidth: 2
            }
        ]
    };

    const options = {
        responsive: true,
        layout: {
            padding: {
                top: 10,
                bottom: -20,
                left: -20,
                right: -20
            }
        },
        plugins: {
            legend: {
                display: false,
                position: 'top',
                labels: {
                    font: {
                        size: 16,
                        family: 'Arial, sans-serif',
                        weight: 'bold'
                    },
                    color: '#333'
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.dataset.label}: ${context.raw.toFixed(2)}`;
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: '',
                    font: {
                        size: 16,
                        family: 'Arial, sans-serif',
                        weight: 'bold'
                    },
                    color: '#333'
                },
                grid: {
                    borderColor: '#ddd',
                    borderWidth: 2,
                    tickColor: '#ddd',
                    drawOnChartArea: true,
                    drawTicks: true,
                    drawBorder: true
                },
                ticks: {
                    font: {
                        size: 14,
                    },
                    padding: 10
                }
            },
            y: {
                title: {
                    display: true,
                    text: '',
                    font: {
                        size: 16,
                        family: 'Arial, sans-serif',
                        weight: 'bold'
                    },
                    color: '#333'
                },
                grid: {
                    borderColor: '#ddd',
                    borderWidth: 2,
                    tickColor: '#ddd',
                    drawOnChartArea: true,
                    drawTicks: true,
                    drawBorder: true
                },
                ticks: {
                    font: {
                        size: 14,
                    },
                    padding: 10
                }
            }
        },
        animation: {
            duration: 1000, // Duration of animations in milliseconds
           // Easing function
            
        }
    };

    return (
        <div style={{ width: '100%', height: '450px' }}>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default ExchangeRateChart;
