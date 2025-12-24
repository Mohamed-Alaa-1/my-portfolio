import React from 'react';
import { Activity, Cpu, Terminal, Server, Database, Eye, Code2 } from 'lucide-react';

export const projects = [
  {
    id: "auravit",
    title: "AuraVIT",
    subtitle: "Federated Learning Framework for Medical Imaging",
    description: "A professional, modular framework for Federated Learning (FL) in medical image segmentation, specifically for Lung Segmentation. It introduces the AuraViT family of models (Lightweight & Stable) and implements advanced FL strategies.",
    fullContent: "\n# Project Overview\n**AuraVIT** is a cutting-edge Federated Learning framework designed for medical image analysis. It addresses the critical challenge of training robust deep learning models on sensitive patient data without compromising privacy.\n\n## Key Features\n*   **Custom Models:** \n    *   *Lightweight AuraViT:* Efficient Hybrid CNN-Transformer optimized for edge devices. \n    *   *Stable AuraViT:* High-capacity model with enhanced stability for complex segmentation tasks. \n*   **Advanced Federated Learning:**\n    *   **Federated Ensemble Learning:** Trains multiple models on disjoint client subsets to boost diversity. \n    *   **Federated Transfer Learning:** Enables fine-tuning of pre-trained models on local client data with encoder freezing. \n    *   **Robustness:** Includes drift detection and adaptive aggregation strategies. \n\n## Technology Stack\n*   **Core:** Python 3.8+, PyTorch\n*   **Architecture:** Hybrid Vision Transformers (ViT) + CNN\n*   **FL Strategies:** FedAvg, FedProx, Custom Ensemble Methods\n\n## Impact\nThis framework facilitates collaboration between hospitals by allowing them to jointly train AI models without ever sharing raw patient images, preserving patient privacy while improving diagnostic accuracy.\n    ",
    tags: ["Python", "PyTorch", "Federated Learning", "Medical AI", "Computer Vision"],
    link: "https://github.com/Mohamed-Alaa-1/AuraVIT",
    icon: Activity
  },
  {
    id: "esp32-ai-monitor",
    title: "ESP32 AI Monitor",
    subtitle: "IoT Environmental Safety System with GenAI",
    description: "An intelligent IoT system that monitors environmental hazards (Fire, Gas, Temp) and uses Google's Gemini API to generate human-readable safety assessments in real-time.",
    fullContent: "\n# Project Overview\nThis project bridges the gap between traditional IoT sensors and modern Generative AI. It uses an **ESP32** microcontroller to collect telemetry and a **Python Host Gateway** to process this data through **Google Gemini 1.5**, delivering actionable safety insights.\n\n## System Architecture\n1.  **Edge Layer (ESP32):**\n    *   Sensors: DHT11 (Temp/Hum), MQ135 (Air Quality), Flame Sensor. \n    *   Actuators: I2C LCD for local alerts. \n    *   Protocol: MQTT over WiFi. \n2.  **Intelligence Layer (Python):**\n    *   Subscribes to sensor data feeds. \n    *   Prompts Gemini API: *\"Act as a safety officer. Analyze these readings...\"* \n    *   Forwards the AI's summary to the user's dashboard. \n3.  **User Interface:**\n    *   **Blynk App:** Displays real-time gauges and the AI-generated safety report. \n\n## Key Technologies\n*   **Embedded:** C, ESP-IDF, FreeRTOS\n*   **AI/Backend:** Python, Gemini API, Adafruit IO (MQTT)\n*   **Hardware:** ESP32, Custom Sensor PCB\n\n## Innovation\nUnlike standard alarms that just beep, this system explains *why* there is an alert (e.g., \"High smoke levels detected with rising temperature, potential fire hazard\") and suggests actions.\n    ",
    tags: ["C++", "IoT", "Gemini API", "ESP-IDF", "MQTT"],
    link: "https://github.com/Mohamed-Alaa-1/Embedded-AI-Environmental-Monitoring-System",
    icon: Cpu
  },
  {
    id: "f1-predictor",
    title: "F1 Predictor V2",
    subtitle: "Machine Learning for Formula 1 Race Outcomes",
    description: "A modular ML pipeline that predicts F1 race results using track-specific historical data. Features a custom Scikit-Learn regressor and automated data fetching from FastF1.",
    fullContent: "\n# Project Overview\n**F1 Predictor V2** is a sophisticated data science project that aims to solve the complex problem of predicting sports outcomes. It moves beyond simple statistics by implementing a \"track-specific\" training strategy, recognizing that a car performing well in Monaco might not perform well in Monza. \n\n## Methodology\n*   **Data Sourcing:** Automated extraction of lap times, telemetry, and weather data using the **FastF1** API. \n*   **Feature Engineering:**\n    *   Calculates \"Average Position Change\". \n    *   Merges Qualifying pace with Race pace. \n    *   Imputes missing data for DNFs (Did Not Finish). \n*   **Modeling:**\n    *   Uses **Gradient Boosting Regressors** for non-linear relationship capture. \n    *   Trains unique models for each specific Grand Prix circuit to capture track characteristics (tire degradation, overtaking difficulty). \n\n## Usage\nThe system is built as a CLI tool:\n```bash\npython main.py --year 2025 --race 23 --event \"Qatar\"\n```\n\n## Tech Stack\n*   **Languages:** Python\n*   **Libraries:** Scikit-Learn, Pandas, NumPy, FastF1\n    ",
    tags: ["Python", "Scikit-Learn", "Data Science", "ML", "FastF1"],
    link: "https://github.com/Mohamed-Alaa-1/f1-predictor",
    icon: Terminal
  },
  {
    id: "nids-federated",
    title: "NIDS Federated Learning",
    subtitle: "Cybersecurity Intrusion Detection System",
    description: "A comparative research study evaluating the effectiveness of Federated Learning versus Centralized Learning for detecting network intrusions using the UNSW-NB15 dataset.",
    fullContent: "\n# Project Overview\nThis research project investigates the application of **Federated Learning (FL)** to **Network Intrusion Detection Systems (NIDS)**. Traditional NIDS require centralizing sensitive network logs, which is a privacy risk. FL offers a solution by training locally. \n\n## Experiments\nWe implemented and compared multiple architectures:\n*   **Deep Neural Networks (DNN)**\n*   **Long Short-Term Memory (LSTM)** networks for temporal sequence analysis. \n*   **Random Forests** (as a baseline). \n\n## Key Findings\nThe project demonstrates that Federated Learning can achieve detection accuracy comparable to centralized methods while significantly reducing bandwidth usage and preserving data privacy across network nodes. \n\n## Technologies\n*   **Framework:** PyTorch\n*   **Dataset:** UNSW-NB15, IoT-Botnet\n*   **Metrics:** Accuracy, Precision, Recall, F1-Score\n    ",
    tags: ["Python", "PyTorch", "Cybersecurity", "Research"],
    link: "https://github.com/Mohamed-Alaa-1/Federated-Learning-for-Network-Intrusion-Detection",
    icon: Server
  },
  {
    id: "global-health",
    title: "Global Health Trends",
    subtitle: "Data Analytics on Lifestyle & Disease",
    description: "An analytical tool investigating correlations between modern lifestyle choices (sugar intake, gym penetration) and health outcomes (diabetes, obesity) using global panel data.",
    fullContent: "\n# Project Overview\nThis project performs a deep-dive statistical analysis on global health datasets. It aggregates data from disjoint sources—FAOSTAT for nutrition, World Bank for disease prevalence, and Google Trends for lifestyle interest—to find hidden correlations. \n\n## Key Insights Visualized\n*   **Sugar vs. Diabetes:** A strong positive correlation visualized across 50+ countries. \n*   **Gym Interest vs. Obesity:** Analysis of whether higher search interest in \"home workouts\" correlates with lower obesity rates. \n\n## Technical Implementation\n*   **Data Gathering:** Web scraping (World Population Review) + API Integration (World Bank, Google Trends). \n*   **Cleaning:** Country name standardization and handling missing panel data. \n*   **Visualization:** Generated complex Seaborn/Matplotlib plots for academic reporting. \n\n## Tech Stack\n*   **Python:** Pandas, NumPy, SciPy\n*   **Visualization:** Matplotlib, Seaborn\n*   **Data Sources:** PyTrends, HTML Scraping\n    ",
    tags: ["Python", "Pandas", "Data Visualization", "Analytics"],
    link: "https://github.com/Mohamed-Alaa-1/Global-Health-Lifestyle-Trends-Analysis",
    icon: Database
  },
  {
    id: "attendance-system",
    title: "Attendance System",
    subtitle: "Facial Recognition Based Logging",
    description: "A desktop application that automates student attendance. It uses computer vision to detect faces in real-time and logs attendance to a central database/file.",
    fullContent: "\n# Project Overview\nA practical desktop application designed to streamline the attendance process in educational institutions. Instead of manual roll calls, the system uses a webcam to identify students instantly. \n\n## Features\n*   **Real-time Detection:** Uses HOG (Histogram of Oriented Gradients) features for fast face detection. \n*   **Registration Module:** Simple UI to register new students and capture their face embeddings. \n*   **Logging:** Automatically saves entry times and student IDs to a CSV/Excel sheet. \n*   **GUI:** User-friendly interface built with Tkinter. \n\n## Tech Stack\n*   **Language:** Python\n*   **Vision:** OpenCV, face_recognition (dlib)\n*   **UI:** Tkinter\n    ",
    tags: ["Python", "OpenCV", "Computer Vision", "Tkinter"],
    link: "https://github.com/Mohamed-Alaa-1/taking-attendance-using-face-recognition",
    icon: Eye
  },
  {
    id: "mips-dsp",
    title: "MIPS DSP Processor",
    subtitle: "Hardware Design of a RISC CPU",
    description: "A Verilog implementation of a MIPS single-cycle processor, architecturally extended with a specialized Digital Signal Processing (DSP) unit.",
    fullContent: "\n# Project Overview\nThis hardware engineering project involves the design and simulation of a 32-bit MIPS processor. The core innovation is the integration of a custom **DSP Unit** within the datapath to accelerate mathematical operations common in signal processing. \n\n## Architecture\n*   **Single-Cycle:** Executes one instruction per clock cycle. \n*   **Components:** \n    *   32-bit ALU and Register File. \n    *   Instruction & Data Memory modules. \n    *   **DSP Extension:** Dedicated hardware for Multiply-Accumulate (MAC) operations. \n\n## Verification\nThe design was verified using **Xilinx Vivado**. Testbenches were written to validate individual control signals and the execution of complex assembly programs. \n\n## Tech Stack\n*   **HDL:** Verilog\n*   **Tools:** Xilinx Vivado, ModelSim\n*   **Architecture:** MIPS32\n    ",
    tags: ["Verilog", "FPGA", "Hardware Design", "Computer Arch"],
    link: "https://github.com/Mohamed-Alaa-1/mips-single-cycle-with-dsp-unit",
    icon: Code2
  }
];
