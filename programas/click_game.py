import tkinter as tk
import time
import os

# ========================
# CONFIGURACIÓN
# ========================
ARCHIVO_DATOS = "datos.txt"
puntos = 0
clicks = []

# ========================
# CARGAR DATOS
# ========================
if os.path.exists(ARCHIVO_DATOS):
    with open(ARCHIVO_DATOS, "r") as f:
        try:
            puntos = int(f.read())
        except:
            puntos = 0

# ========================
# VENTANA
# ========================
ventana = tk.Tk()
ventana.title("EZE | Hacker Clicker")
ventana.geometry("420x320")
ventana.config(bg="black")

# ========================
# FUNCIONES
# ========================
def guardar_puntos():
    with open(ARCHIVO_DATOS, "w") as f:
        f.write(str(puntos))

def sumar_punto():
    global puntos, clicks
    puntos += 1
    etiqueta_puntos.config(text=f"PUNTOS: {puntos}")
    clicks.append(time.time())

def actualizar_cps():
    ahora = time.time()
    clicks_recientes = [c for c in clicks if ahora - c <= 1]
    etiqueta_cps.config(text=f"CPS: {len(clicks_recientes)}")
    ventana.after(200, actualizar_cps)

def al_cerrar():
    guardar_puntos()
    ventana.destroy()

ventana.protocol("WM_DELETE_WINDOW", al_cerrar)

# ========================
# TÍTULO
# ========================
titulo = tk.Label(
    ventana,
    text="E Z E",
    fg="#00ff00",
    bg="black",
    font=("Courier", 24, "bold")
)
titulo.pack(pady=10)

# ========================
# CONTADOR
# ========================
etiqueta_puntos = tk.Label(
    ventana,
    text=f"PUNTOS: {puntos}",
    fg="#00ff00",
    bg="black",
    font=("Courier", 16)
)
etiqueta_puntos.pack()

# ========================
# BOTÓN
# ========================
boton = tk.Button(
    ventana,
    text="CLICK",
    bg="#003300",
    fg="#00ff00",
    activebackground="#005500",
    font=("Courier", 20, "bold"),
    width=10,
    height=2,
    command=sumar_punto,
    relief="ridge",
    bd=4
)
boton.pack(expand=True)

# ========================
# CPS
# ========================
etiqueta_cps = tk.Label(
    ventana,
    text="CPS: 0",
    fg="#00aa00",
    bg="black",
    font=("Courier", 12)
)
etiqueta_cps.pack(pady=5)

# ========================
# LOOP
# ========================
actualizar_cps()
ventana.mainloop()

