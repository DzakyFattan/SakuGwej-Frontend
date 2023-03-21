<script setup lang="ts">
    import { useThemeStore } from "@/stores/theme";
import Chart, { type ChartConfiguration } from "chart.js/auto"
    import { onMounted } from "vue";

    const prop      = defineProps(["chart"])
    const chart     = prop.chart 

    let chartElmt : Chart;

    onMounted(() => {
        makeChart()
        window.addEventListener("resize", () => {
            chartElmt.resize(getWidth(), getHeight())        
        })
    })

    function getHeight() {
        return 0.295 * window.screen.height
    }

    function getWidth() {
        return (window.screen.width-400)/3
    }

    function makeChart() {
        const chartCanvas = document.getElementById(chart.id) as HTMLCanvasElement
        if (chart.type == "bar") {
            const data = {
                labels: chart.label,
                datasets: [{
                    label: chart.legend,
                    data: chart.data,
                }]

            }
            const config : ChartConfiguration = {
                type: 'bar',
                data: data,
                options: {
                    scales: {
                    y: {
                        beginAtZero: true
                    }
                    },
                },
            };
            chartElmt = new Chart(chartCanvas, config)
            chartElmt.render()
        }
    }

    const { themeClasses } = useThemeStore();
</script>

<template>
    <div id="canvas-container">
        <canvas 
        :class="themeClasses.borderMain"
        class="rounded-md mx-4 my-5 px-2" 
        :id="chart.id"
        :width="getWidth()"
        :height="getHeight()"
        ></canvas>
    </div>
</template>