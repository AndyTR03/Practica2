---
sidebar_position: 3
---
# Tutorial de instalacion - Linux | Valet

## Manual de Instalación - Linux | Valet

**Requisitos Previos**

Antes de iniciar la instalación, asegúrese de cumplir con los siguientes requisitos:

1. **Acceso Root:**
   - Contar con acceso root al servidor local.

2. **Instalación de PHP 7.2 y Librerías:**
   - Ubuntu no cuenta con la versión 7.2 de PHP de manera nativa. Ejecute los siguientes comandos para agregar un repositorio y proceder con la instalación:
     ```bash
     apt-get update
     apt-get install software-properties-common
     apt-get install python-software-properties
     add-apt-repository ppa:ondrej/php
     apt-get update
     apt-get install php7.2 php7.2-mbstring php7.2-soap php7.2-zip php7.2-mysql php7.2-curl php7.2-gd php7.2-xml php7.2-mcrypt
     ```

3. **Instalación de MySQL y PhpMyAdmin:**
   - Instale MySQL y PhpMyAdmin (opcional) con los siguientes comandos:
     ```bash
     apt-get install mysql-server-5.7 mysql-client-5.7 phpmyadmin
     ```
   - Se le solicitará la contraseña dos veces.

4. **Instalación de Git, Curl, Composer:**
   - Instale Git y Curl:
     ```bash
     apt-get install git
     apt-get install curl
     ```
   - Instale Composer:
     ```bash
     apt-get install composer
     ```
   - Dar permisos a la carpeta composer:
     ```bash
     chmod -R 777 ~/.composer
     ```
   - Instale librerías de Valet:
     ```bash
     composer global require cpriego/valet-linux
     ```

   - Vaya a la carpeta `~/.profile` y añada la siguiente línea al final del documento y guarde:
     ```bash
     nano ~/.profile
     PATH="HOME/.composer/vendor/bin:$PATH"
     ```

   - Luego ejecute en terminal:
     ```bash
     source ~/.profile
     ```

   - Instale las siguientes librerías:
     ```bash
     apt install network-manager libnss3-tools jq xsel
     ```

5. **Instalación de Nginx y Valet:**
   - Detenga servicios de Apache2 si está instalado:
     ```bash
     service apache2 stop
     ```
   - Instale Nginx:
     ```bash
     apt install nginx
     ```
   - Verifique que el servidor de Nginx se está ejecutando correctamente:
     ```bash
     systemctl status nginx
     ```
   - Instale Valet:
     ```bash
     valet install
     ```

6. **Configuración de Valet:**
   - Cree una carpeta para el código:
     ```bash
     mkdir ~/code
     cd code
     valet park
     ```

   - Clone el repositorio:
     ```bash
     git clone https://gitlab.com/b.mendoza/facturadorpro3.git
     ```

   - Entre en la carpeta y configure el archivo .env:
     ```bash
     cd facturadorpro3
     cp .env.example .env
     php artisan key:generate
     composer dump-autoload
     ```

   - Registre la base de datos mediante phpmyadmin.
   - Ejecute las migraciones:
     ```bash
     composer install
     php artisan migrate --seed
     ```

7. **Verificación y Acceso:**
   - Verifique el aplicativo actualizando phpmyadmin.
   - Ejecute los siguientes comandos para establecer los permisos:
     ```bash
     chmod -R 755 storage
     chmod -R 755 bootstrap/cache
     php artisan storage:link
     ```

   - Acceda al proyecto en su dominio:
     - [Facturadorpro3.test](http://Facturadorpro3.test)
     - Usuario: admin@gmail.com
     - Contraseña: 123456
