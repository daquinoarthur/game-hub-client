FROM node:19.6.0-alpine3.17

ENV EDITOR=vi
ENV VISUAL=vi
ENV ENV=/etc/ash/ashrc

WORKDIR /app

RUN mkdir -p /etc/ash && \
    echo "set -o vi" > /etc/ash/ashrc && \
    cd && echo "set -o vi" >> .ashrc && \
    echo "export EDITOR=vi" >> .ashrc && \
    echo "export VISUAL=vi" >> .ashrc && \
    echo "set -o vi" >> .profile

EXPOSE 5173

CMD ["tail", "-f", "/dev/null"]
