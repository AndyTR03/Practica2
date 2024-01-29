---
sidebar_position: 4
---
# Tutorial del Facturador - Docker | Linux | SSL Externo

## Instalación del Facturador - Docker | Linux | SSL Externo

## Pasos

1. Para realizar la instalación, ejecute el script evitando la instalación del SSL. Le será consultado durante el proceso, y deberá ingresar "n".

2. Finalizada la instalación, diríjase a la ruta de instalación:
   ```bash
   cd /root/facturadorpro31/

3. debe editar el archivo **.env**
    ```bash
    nano .env
dentro del editor ubicar los parámetros y cambiarlos

- **Antes:**
    ```env
    APP_URL=http://${APP_URL_BASE}
    FORCE_HTTPS=false
  
- **Despues:**
    ```bash
    APP_URL=https://${APP_URL_BASE}
    FORCE_HTTPS=true


4. una vez finalizado, guarde y salga del editor

5. ejecute los siguientes comandos para eliminar la caché de la aplicación
   ```bash
   php artisan config:cache
6. con eso habrá completado el lado de la herramienta, en ese momento hasta no tener un SSL configurado no podrá acceder a la herramienta

> **Importante:**
> Recuerde habilitar el puerto 443 para poder tener acceso a la herramienta.
