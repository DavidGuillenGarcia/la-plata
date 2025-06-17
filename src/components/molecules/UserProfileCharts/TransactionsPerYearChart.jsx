import { useContext } from "react"

import { UserTransactionsContext } from "../../../contexts/UserTransactionsContext"

import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);


export function TransactionsPerYearChart() {
    const { userTransactionsList } = useContext(UserTransactionsContext);

    const transactionsPerYear = {};

    userTransactionsList.forEach((transaction) => {
        const transactionDate = new Date(transaction.date);
        const transactionYear = transactionDate.getFullYear();

        if (!transactionsPerYear[transactionYear]) {
            transactionsPerYear[transactionYear] = 0;
        }
        transactionsPerYear[transactionYear]++;
    });

    const data = {
        labels: Object.keys(transactionsPerYear),
        datasets: [
            {
                label: 'Transaction quantity',
                data: Object.values(transactionsPerYear),
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderRadius: 8,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Transactions per year',
                font: { size: 18 },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                stepSize: 1,
                ticks: {
                    precision: 0,
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
}

