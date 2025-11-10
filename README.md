# 🎨 AI-Powered Image Caption Generator

> 🚀 **A modern, full-stack AI application that generates natural language captions for images using cutting-edge deep learning models and OpenAI's GPT-4o Vision API.**

## ✨ Features

### 🎯 Core Capabilities
- **Dual AI Approach**: 
  - 🤖 OpenAI GPT-4o Vision API for instant, high-quality captions
  - 🧠 Custom-trained LSTM model with attention mechanism
- **Lightning Fast**: Generate captions in seconds with optimized processing
- **Unlimited Uploads**: No restrictions on the number of images you can caption
- **Drag & Drop Interface**: Modern, intuitive UI with smooth animations
- **High Accuracy**: State-of-the-art models trained on extensive datasets
- **Copy to Clipboard**: One-click caption copying for easy use
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

### 🎨 User Experience
- Beautiful gradient-based UI with dark theme
- Smooth animations powered by Framer Motion
- Real-time processing feedback
- Multiple image upload support
- Preview images before caption generation

---

## 🏗️ Project Architecture

This project consists of two main components:

```
┌─────────────────────────────────────────────────────────┐
│                  Frontend (Next.js)                      │
│  ┌───────────────────────────────────────────────────┐  │
│  │  • Modern Landing Page                            │  │
│  │  • Image Upload Component                         │  │
│  │  • OpenAI GPT-4o Integration                      │  │
│  │  • Responsive UI with Tailwind CSS                │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                            ↕
┌─────────────────────────────────────────────────────────┐
│             Backend (Python + Streamlit)                 │
│  ┌───────────────────────────────────────────────────┐  │
│  │  • Custom LSTM Model                              │  │
│  │  • VGG16/MobileNetV2 Feature Extraction           │  │
│  │  • Attention Mechanism                            │  │
│  │  • Trained on Flickr8k Dataset                    │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## 🔬 Technologies Used

### Frontend
| Technology | Purpose |
|-----------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS** | Utility-first CSS framework |
| **Framer Motion** | Advanced animations and transitions |
| **OpenAI API** | GPT-4o Vision for caption generation |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Python 3.10+** | Core programming language |
| **TensorFlow 2.15** | Deep learning framework |
| **Keras** | High-level neural networks API |
| **VGG16/MobileNetV2** | Pre-trained CNN for feature extraction |
| **LSTM** | Sequence generation model |
| **Streamlit** | Web application framework |
| **NumPy & Pandas** | Data manipulation |
| **PIL (Pillow)** | Image processing |

---

## 📦 Installation

### Prerequisites
- **Node.js** 18.0 or higher
- **Python** 3.10 or higher
- **npm** or **yarn**
- **pip** package manager

### Frontend Setup (Next.js)

1. **Clone the repository**
```bash
git clone https://github.com/Likhith-BlueLotus/AI-Powered-Image-Caption-Generator.git
cd AI-Powered-Image-Caption-Generator
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:
```env
OPENAI_API_KEY=your_openai_api_key_here
```

To get your OpenAI API key:
- Visit [OpenAI Platform](https://platform.openai.com/api-keys)
- Create an account or sign in
- Generate a new API key

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
Navigate to `http://localhost:3000`

### Backend Setup (Python)

1. **Navigate to backend directory**
```bash
cd backend
```

2. **Create a virtual environment** (recommended)
```bash
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

3. **Install required packages**
```bash
pip install -r requirements.txt
```

4. **Download the Flickr8k dataset** (if training from scratch)
- Visit [Kaggle - Flickr8k Dataset](https://www.kaggle.com/adityajn105/flickr8k)
- Download and extract to `flickr8k/` directory

5. **Run the Streamlit app**
```bash
streamlit run app.py
```

6. **Open your browser**
Navigate to `http://localhost:8501`

---

## 🚀 Usage

### Using the Frontend Application

1. **Navigate to the Upload Section**
   - Scroll down to the "Try it now" section or click the navigation link

2. **Upload Images**
   - Drag and drop images into the upload area
   - Or click to browse and select files
   - Supports: JPG, PNG, WebP, GIF (Max 10MB per image)

3. **Generate Captions**
   - Click "Generate captions" button
   - Wait for AI processing (usually 2-5 seconds per image)

4. **View and Use Results**
   - View generated captions alongside images
   - Click "Copy Caption" to copy to clipboard
   - Upload new images as needed

### Using the Backend Streamlit App

1. **Launch the application**
```bash
cd backend
streamlit run app.py
```

2. **Upload an image**
   - Use the file uploader to select an image

3. **View generated caption**
   - The LSTM model will generate and display a caption
   - Caption appears below the uploaded image

---

## 🧠 Deep Learning Model

### Architecture Overview

The backend uses a sophisticated encoder-decoder architecture:

```
┌─────────────────────────────────────────────────────────┐
│                    INPUT IMAGE                           │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│         ENCODER: VGG16 / MobileNetV2                     │
│  • Pre-trained on ImageNet                               │
│  • Extracts 1280/512-dimensional feature vector          │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│         DECODER: LSTM with Attention                     │
│  • Word embedding layer                                  │
│  • LSTM layers for sequence generation                   │
│  • Attention mechanism for focus                         │
│  • Output: Natural language caption                      │
└─────────────────────────────────────────────────────────┘
```

### Training Details
- **Dataset**: Flickr8k (8,091 images with 5 captions each)
- **Vocabulary Size**: ~8,000 unique words
- **Max Caption Length**: 34 words
- **Loss Function**: Categorical Cross-Entropy
- **Optimizer**: Adam
- **Feature Extraction**: VGG16 (accurate) or MobileNetV2 (memory-efficient)

### Model Specifications
- **VGG16 Features**: 512-dimensional vectors
- **MobileNetV2 Features**: 1280-dimensional vectors
- **Embedding Dimension**: 256
- **LSTM Units**: 512
- **Attention Mechanism**: Additive attention for improved caption quality
  
---

## 🌐 API Endpoints

### Frontend API

#### `POST /api/generate-caption`
Generate a caption for an uploaded image using OpenAI GPT-4o Vision.

**Request:**
```typescript
Content-Type: multipart/form-data
Body: {
  image: File  // Image file (JPG, PNG, WebP, GIF)
}
```

**Response:**
```json
{
  "success": true,
  "caption": "A sunset over the ocean with vibrant orange and purple hues reflecting on the water."
}
```

**Error Response:**
```json
{
  "error": "Error message description"
}
```

---

## 🎯 How It Works

### Frontend Flow

1. **User uploads image(s)** via drag-and-drop or file picker
2. **Image is converted to base64** format
3. **Sent to `/api/generate-caption`** endpoint
4. **OpenAI GPT-4o Vision** analyzes the image
5. **Caption is returned** and displayed to user
6. **User can copy** caption to clipboard

### Backend Flow

1. **User uploads image** through Streamlit interface
2. **Image preprocessing**:
   - Resize to 224×224 pixels
   - Convert to array format
   - Apply MobileNetV2 preprocessing
3. **Feature extraction** using pre-trained CNN
4. **Caption generation**:
   - Start with "startseq" token
   - LSTM predicts next word iteratively
   - Attention mechanism focuses on relevant image features
   - Stop at "endseq" token or max length
5. **Post-processing**: Remove special tokens
6. **Display caption** with formatted styling

---

## 🔮 Future Enhancements

### Planned Features
- [ ] **Multilingual Captions**: Support for captions in multiple languages
- [ ] **Beam Search Decoding**: Generate multiple caption options
- [ ] **Confidence Scores**: Display AI confidence for each caption
- [ ] **Custom Model Selection**: Choose between different AI models
- [ ] **Batch Processing**: Process multiple images simultaneously
- [ ] **Export Options**: Download captions in various formats (CSV, JSON, TXT)
- [ ] **Fine-tuning Interface**: Allow users to train on custom datasets
- [ ] **Image Editing**: Basic crop/resize before caption generation
- [ ] **Caption Customization**: Adjust caption length and detail level
- [ ] **API Rate Limiting**: Implement proper rate limiting for public deployment

### Model Improvements
- [ ] Train on Flickr30k for enhanced diversity
- [ ] Implement Transformer-based models (BERT, GPT)
- [ ] Add object detection integration
- [ ] Improve attention visualization
- [ ] Support for video caption generation

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
```bash
git checkout -b feature/AmazingFeature
```

3. **Commit your changes**
```bash
git commit -m 'Add some AmazingFeature'
```

4. **Push to the branch**
```bash
git push origin feature/AmazingFeature
```

5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices for frontend
- Follow PEP 8 style guide for Python code
- Add comments for complex logic
- Update README if adding new features
- Test thoroughly before submitting PR

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](backend/LICENSE.md) file for details.

---

## 👥 Authors

**Likhith - BlueLotus**
- GitHub: [@Likhith-BlueLotus](https://github.com/Likhith-BlueLotus)

---

## 🙏 Acknowledgments

- [Flickr8k Dataset](https://www.kaggle.com/adityajn105/flickr8k) for training data
- [OpenAI](https://openai.com/) for GPT-4o Vision API
- [TensorFlow](https://www.tensorflow.org/) and [Keras](https://keras.io/) teams
- [Next.js](https://nextjs.org/) and [React](https://react.dev/) communities
- [Vercel](https://vercel.com/) for frontend hosting capabilities
- [Streamlit](https://streamlit.io/) for the backend framework

---

## 📞 Support

If you encounter any issues or have questions:

1. **Check existing issues** on GitHub
2. **Create a new issue** with detailed description
3. **Star the repository** if you find it helpful! ⭐

---

## 📊 Project Status

🟢 **Active Development** - Regular updates and maintenance

**Last Updated**: November 2025

---

<div align="center">

**Made with ❤️ and 🤖 AI**

If you found this project helpful, please consider giving it a ⭐!

</div>

