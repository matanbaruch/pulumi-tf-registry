// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface GetPagespeedMonitoringLocationsLocation {
    description: string;
    ipv4: string;
    ipv6: string;
    region: string;
    regionCode: string;
    status: string;
}

export interface GetUptimeMonitoringLocationsLocation {
    description: string;
    ipv4: string;
    ipv6: string;
    region: string;
    regionCode: string;
    status: string;
}

export interface HeartbeatCheckMonitoredResource {
    /**
     * Name of the hosting provider
     */
    host?: string;
}

export interface PagespeedCheckAlertConfig {
    /**
     * An alert will be sent if the size of the page is larger than this value (kb).
     */
    alertBigger?: number;
    /**
     * An alert will be sent if the load time of the page exceeds this value (ms).
     */
    alertSlower?: number;
    /**
     * An alert will be sent if the size of the page is smaller than this value (kb).
     */
    alertSmaller?: number;
}

export interface PagespeedCheckMonitoredResource {
    /**
     * URL or IP address of the website under test
     */
    address: string;
}

export interface SslCheckAlertConfig {
    /**
     * List representing when alerts should be sent (days). Must be exactly 3 numerical values
     */
    alertAts: number[];
    /**
     * Whether to enable alerts when SSL certificate issues are found
     */
    onBroken?: boolean;
    /**
     * Whether to enable alerts when the SSL certificate is to expire
     */
    onExpiry?: boolean;
    /**
     * Whether to enable alerts when mixed content is found
     */
    onMixed?: boolean;
    /**
     * Whether to enable alert reminders
     */
    onReminder?: boolean;
}

export interface SslCheckMonitoredResource {
    /**
     * URL of the server under test
     */
    address: string;
    /**
     * Hostname of the server under test
     */
    hostname?: string;
}

export interface UptimeCheckDnsCheck {
    /**
     * List of IP addresses to compare against returned DNS records
     */
    dnsIps: string[];
    /**
     * FQDN or IP address of the nameserver to query
     */
    dnsServer?: string;
}

export interface UptimeCheckHttpCheck {
    /**
     * Basic Authentication (RFC7235) configuration block
     */
    basicAuthentication?: outputs.UptimeCheckHttpCheckBasicAuthentication;
    /**
     * Content matcher configuration block. This is used to assert values within the response of the request
     */
    contentMatchers?: outputs.UptimeCheckHttpCheckContentMatchers;
    /**
     * Whether to enable cookie storage
     */
    enableCookies?: boolean;
    /**
     * Specify where the redirect chain should end
     */
    finalEndpoint?: string;
    /**
     * Whether to follow redirects when testing. Disabled by default
     */
    followRedirects?: boolean;
    /**
     * Represents headers to be sent when making requests
     */
    requestHeaders?: {[key: string]: string};
    /**
     * Type of HTTP check. Either HTTP, or HEAD
     */
    requestMethod?: string;
    /**
     * Payload submitted with the request. Setting this updates the check to use the HTTP POST verb. Only one of `request_payload` or `request_payload_raw` may be specified
     */
    requestPayload?: {[key: string]: string};
    /**
     * Raw payload submitted with the request. Setting this updates the check to use the HTTP POST verb. Only one of `request_payload` or `request_payload_raw` may be specified
     */
    requestPayloadRaw?: string;
    /**
     * List of status codes that trigger an alert. If not specified then the default status codes are used. Once set, the default status codes cannot be restored and ommitting this field does not clear the attribute
     */
    statusCodes: string[];
    /**
     * The number of seconds to wait to receive the first byte
     */
    timeout?: number;
    /**
     * Custom user agent string set when testing
     */
    userAgent?: string;
    /**
     * Whether to send an alert if the SSL certificate is soon to expire
     */
    validateSsl?: boolean;
}

export interface UptimeCheckHttpCheckBasicAuthentication {
    password: string;
    username: string;
}

export interface UptimeCheckHttpCheckContentMatchers {
    /**
     * String to look for within the response. Considered down if not found
     */
    content: string;
    /**
     * Include header content in string match search
     */
    includeHeaders?: boolean;
    /**
     * Whether to consider the check as down if the content is present within the response
     */
    matcher?: string;
}

export interface UptimeCheckIcmpCheck {
    /**
     * Dummy attribute to allow for a nested block. This field should not be changed
     */
    enabled?: boolean;
}

export interface UptimeCheckLocation {
    description: string;
    ipv4: string;
    ipv6: string;
    region: string;
    regionCode: string;
    status: string;
}

export interface UptimeCheckMonitoredResource {
    /**
     * URL, FQDN, or IP address of the server under test
     */
    address: string;
    /**
     * Name of the hosting provider
     */
    host?: string;
}

export interface UptimeCheckTcpCheck {
    /**
     * Authentication configuration block
     */
    authentication?: outputs.UptimeCheckTcpCheckAuthentication;
    /**
     * Destination port for TCP checks
     */
    port: number;
    /**
     * Type of TCP check. Either SMTP, SSH or TCP
     */
    protocol?: string;
    /**
     * The number of seconds to wait to receive the first byte
     */
    timeout?: number;
}

export interface UptimeCheckTcpCheckAuthentication {
    password: string;
    username: string;
}

