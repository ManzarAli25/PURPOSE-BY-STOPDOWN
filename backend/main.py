from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Mobile CRM API", version="1.0.0")

# Enable CORS for all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Mobile CRM API is running"}

@app.get("/purpose")
def get_purpose():
    return {"message": "PURPOSE BY STOP DOWN \"SYSTEM THAT POWERS GROWTH!\""}