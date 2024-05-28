cp get-prices.service /etc/systemd/system
cp get-prices.timer /etc/systemd/system
systemctl enable get-prices.timer
systemctl start get-prices.timer
