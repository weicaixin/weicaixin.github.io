
lftp -c "set ftp:ssl-allow no; open -u $FTP_USERNAME,$FTP_PASSWORD $FTP_HOST; mirror -Rnev ./public_html ./ --ignore-time --parallel=10 --exclude-glob .git* --exclude .git/"