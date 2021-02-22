FROM centos:centos7

#Install Java8
RUN yum -y install java-1.8.0-openjdk java-1.8.0-openjdk-devel && yum clean all
ENV JAVA_HOME /usr/lib/jvm/java-openjdk

# Install node 10.10.1
RUN curl -sL https://rpm.nodesource.com/setup_10.x | bash -
RUN yum install -y nodejs

# Install other needed tools
RUN yum install -y make gcc*
RUN curl  https://saucelabs.com/downloads/sc-4.6.2-linux.tar.gz  --output file.tar.gz && tar xvzf file.tar.gz

#Install docker
RUN yum install -y yum-utils device-mapper-persistent-data lvm2
RUN curl -fsSL https://get.docker.com/ | sh

#Expose port 443 for SauceLabs communication
EXPOSE 443
