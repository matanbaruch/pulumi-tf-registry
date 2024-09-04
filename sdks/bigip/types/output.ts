// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface CmDevicegroupDevice {
    /**
     * Name of origin
     */
    name?: string;
    /**
     * Name of origin
     */
    setSyncLeader?: boolean;
}

export interface EventServiceDiscoveryNode {
    /**
     * name of node
     */
    id?: string;
    /**
     * ip of nonde
     */
    ip?: string;
    /**
     * port
     */
    port?: number;
}

export interface FastHttpAppMonitor {
    /**
     * Set the time between health checks, in seconds.
     */
    interval?: number;
    monitorAuth?: boolean;
    password?: string;
    response?: string;
    /**
     * Optional data to be sent during each health check.
     */
    sendString?: string;
    username?: string;
}

export interface FastHttpAppPoolMember {
    addresses: string[];
    connectionLimit: number;
    port?: number;
    priorityGroup: number;
    shareNodes: boolean;
}

export interface FastHttpAppVirtualServer {
    /**
     * foo
     */
    ip: string;
    /**
     * foo
     */
    port: number;
}

export interface FastHttpAppWafSecurityPolicy {
    /**
     * Enables Fast to WAF security policy
     */
    enable: boolean;
}

export interface FastHttpsAppMonitor {
    /**
     * Set the time between health checks, in seconds.
     */
    interval?: number;
    monitorAuth?: boolean;
    password?: string;
    response?: string;
    /**
     * Optional data to be sent during each health check.
     */
    sendString?: string;
    username?: string;
}

export interface FastHttpsAppPoolMember {
    addresses: string[];
    connectionLimit: number;
    port?: number;
    priorityGroup: number;
    shareNodes: boolean;
}

export interface FastHttpsAppTlsClientProfile {
    /**
     * Select an existing BIG-IP SSL certificate
     */
    tlsCertName: string;
    /**
     * Select an existing BIG-IP SSL key
     */
    tlsKeyName: string;
}

export interface FastHttpsAppTlsServerProfile {
    /**
     * Select an existing BIG-IP SSL certificate
     */
    tlsCertName: string;
    /**
     * Select an existing BIG-IP SSL key
     */
    tlsKeyName: string;
}

export interface FastHttpsAppVirtualServer {
    /**
     * foo
     */
    ip: string;
    /**
     * foo
     */
    port: number;
}

export interface FastHttpsAppWafSecurityPolicy {
    /**
     * Enables Fast to WAF security policy
     */
    enable: boolean;
}

export interface FastTcpAppMonitor {
    /**
     * Set the time between health checks, in seconds.
     */
    interval?: number;
}

export interface FastTcpAppPoolMember {
    addresses: string[];
    connectionLimit?: number;
    port?: number;
    priorityGroup?: number;
    shareNodes?: boolean;
}

export interface FastTcpAppVirtualServer {
    /**
     * This IP address, combined with the port you specify below, becomes the BIG-IP virtual server address and port, which clients use to access the application.
     */
    ip: string;
    /**
     * Port for the virtual server.
     */
    port: number;
}

export interface FastUdpAppMonitor {
    /**
     * The presence of this optional string is required in the response, if specified to confirms availability.
     */
    expectedResponse?: string;
    /**
     * Set the time between health checks, in seconds.
     */
    interval?: number;
    /**
     * Optional data to be sent during each health check.
     */
    sendString?: string;
}

export interface FastUdpAppPoolMember {
    addresses: string[];
    connectionLimit?: number;
    port?: number;
    priorityGroup?: number;
    shareNodes?: boolean;
}

export interface FastUdpAppVirtualServer {
    /**
     * This IP address, combined with the port you specify below, becomes the BIG-IP virtual server address and port, which clients use to access the application.
     */
    ip: string;
    /**
     * Port for the virtual server.
     */
    port: number;
}

export interface GetLtmDatagroupRecord {
    data?: string;
    name: string;
}

export interface GetLtmNodeFqdn {
    /**
     * The FQDN node's address family.
     */
    addressFamily?: string;
    /**
     * Specifies if the node should scale to the IP address set returned by DNS.
     */
    autopopulate: string;
    /**
     * The number of attempts to resolve a domain name.
     */
    downinterval: number;
    /**
     * The amount of time before sending the next DNS query.
     */
    interval: string;
    /**
     * The fully qualified domain name of the node.
     */
    name?: string;
}

export interface GetLtmPolicyRule {
    actions?: outputs.GetLtmPolicyRuleAction[];
    conditions?: outputs.GetLtmPolicyRuleCondition[];
    /**
     * Rule name
     */
    name: string;
}

export interface GetLtmPolicyRuleAction {
    appService: string;
    application: string;
    asm: boolean;
    avr: boolean;
    cache: boolean;
    carp: boolean;
    category: string;
    classify: boolean;
    clonePool: string;
    code: number;
    compress: boolean;
    connection: boolean;
    content: string;
    cookieHash: boolean;
    cookieInsert: boolean;
    cookiePassive: boolean;
    cookieRewrite: boolean;
    decompress: boolean;
    defer: boolean;
    destinationAddress: boolean;
    disable: boolean;
    domain: string;
    enable: boolean;
    expiry: string;
    expirySecs: number;
    expression: string;
    extension: string;
    facility: string;
    forward?: boolean;
    fromProfile: string;
    hash: boolean;
    host: string;
    http: boolean;
    httpBasicAuth: boolean;
    httpCookie: boolean;
    httpHeader: boolean;
    httpHost?: boolean;
    httpReferer: boolean;
    httpReply: boolean;
    httpSetCookie: boolean;
    httpUri: boolean;
    ifile: string;
    insert: boolean;
    internalVirtual: string;
    ipAddress: string;
    key: string;
    l7dos: boolean;
    length: number;
    location: string;
    log: boolean;
    ltmPolicy: boolean;
    member: string;
    message: string;
    netmask: string;
    nexthop: string;
    node: string;
    offset: number;
    path: string;
    pem: boolean;
    persist: boolean;
    pin: boolean;
    policy: string;
    pool: string;
    port: number;
    priority: string;
    profile: string;
    protocol: string;
    queryString: string;
    rateclass: string;
    redirect: boolean;
    remove: boolean;
    replace: boolean;
    request: boolean;
    requestAdapt: boolean;
    reset: boolean;
    response: boolean;
    responseAdapt: boolean;
    scheme: string;
    script: string;
    select: boolean;
    serverSsl: boolean;
    setVariable: boolean;
    shutdown: boolean;
    snat: string;
    snatpool: string;
    sourceAddress: boolean;
    sslClientHello: boolean;
    sslServerHandshake: boolean;
    sslServerHello: boolean;
    sslSessionId: boolean;
    status: number;
    tcl: boolean;
    tcpNagle: boolean;
    text: string;
    timeout: number;
    tmName: string;
    uie: boolean;
    universal: boolean;
    value: string;
    virtual: string;
    vlan: string;
    vlanId: number;
    wam: boolean;
    write: boolean;
}

export interface GetLtmPolicyRuleCondition {
    address: boolean;
    all: boolean;
    appService: string;
    browserType: boolean;
    browserVersion: boolean;
    caseInsensitive: boolean;
    caseSensitive: boolean;
    cipher: boolean;
    cipherBits: boolean;
    clientSsl: boolean;
    code: boolean;
    commonName: boolean;
    contains: boolean;
    continent: boolean;
    countryCode: boolean;
    countryName: boolean;
    cpuUsage: boolean;
    datagroup: string;
    deviceMake: boolean;
    deviceModel: boolean;
    domain: boolean;
    endsWith: boolean;
    equals: boolean;
    expiry: boolean;
    extension: boolean;
    external: boolean;
    geoip: boolean;
    greater: boolean;
    greaterOrEqual: boolean;
    host: boolean;
    httpBasicAuth: boolean;
    httpCookie: boolean;
    httpHeader: boolean;
    httpHost: boolean;
    httpMethod: boolean;
    httpReferer: boolean;
    httpSetCookie: boolean;
    httpStatus: boolean;
    httpUri: boolean;
    httpUserAgent: boolean;
    httpVersion: boolean;
    index: number;
    internal: boolean;
    isp: boolean;
    last15secs: boolean;
    last1min: boolean;
    last5mins: boolean;
    less: boolean;
    lessOrEqual: boolean;
    local: boolean;
    major: boolean;
    matches: boolean;
    minor: boolean;
    missing: boolean;
    mss: boolean;
    not: boolean;
    org: boolean;
    password: boolean;
    path: boolean;
    pathSegment: boolean;
    port: boolean;
    present: boolean;
    protocol: boolean;
    queryParameter: boolean;
    queryString: boolean;
    regionCode: boolean;
    regionName: boolean;
    remote: boolean;
    request: boolean;
    response: boolean;
    routeDomain: boolean;
    rtt: boolean;
    scheme: boolean;
    serverName: boolean;
    sslCert: boolean;
    sslClientHello: boolean;
    sslExtension: boolean;
    sslServerHandshake: boolean;
    sslServerHello: boolean;
    startsWith: boolean;
    tcp: boolean;
    text: boolean;
    tmName: string;
    unnamedQueryParameter: boolean;
    userAgentToken: boolean;
    username: boolean;
    value: boolean;
    values: string[];
    version: boolean;
    vlan: boolean;
    vlanId: boolean;
}

export interface GetWafEntityParameterUrl {
    method: string;
    name: string;
    protocol: string;
    type: string;
}

export interface GetWafEntityUrlCrossOriginRequestsEnforcement {
    /**
     * Specifies whether the subdomains are allowed to receive data from the web application.
     */
    includeSubdomains?: boolean;
    /**
     * Specifies the name of the origin with which you want to share your data.
     */
    originName: string;
    /**
     * Specifies the port that other web applications are allowed to use to request data from your web application.
     */
    originPort: string;
    /**
     * Specifies the protocol that other web applications are allowed to use to request data from your web application.
     */
    originProtocol: string;
}

export interface GetWafEntityUrlMethodOverride {
    /**
     * Specifies that the system allows or disallows a method for this URL.
     */
    allow: boolean;
    /**
     * Specifies an HTTP method.
     */
    method: string;
}

export interface LtmDatagroupRecord {
    data?: string;
    name: string;
}

export interface LtmNodeFqdn {
    /**
     * Specifies the node's address family. The default is 'unspecified', or IP-agnostic
     */
    addressFamily: string;
    /**
     * Specifies whether the node should scale to the IP address set returned by DNS.
     */
    autopopulate: string;
    /**
     * Specifies the number of attempts to resolve a domain name. The default is 5.
     */
    downinterval: number;
    /**
     * Specifies the amount of time before sending the next DNS query.
     */
    interval: string;
    /**
     * Specifies the fully qualified domain name of the node.
     */
    name?: string;
}

export interface LtmPolicyRule {
    actions?: outputs.LtmPolicyRuleAction[];
    conditions?: outputs.LtmPolicyRuleCondition[];
    /**
     * Specifies descriptive text that identifies the irule attached to policy.
     */
    description?: string;
    /**
     * Rule name
     */
    name: string;
}

export interface LtmPolicyRuleAction {
    appService: string;
    application: string;
    asm: boolean;
    avr: boolean;
    cache: boolean;
    carp: boolean;
    category: string;
    classify: boolean;
    clonePool: string;
    code: number;
    compress: boolean;
    connection?: boolean;
    content: string;
    cookieHash: boolean;
    cookieInsert: boolean;
    cookiePassive: boolean;
    cookieRewrite: boolean;
    decompress: boolean;
    defer: boolean;
    destinationAddress: boolean;
    disable: boolean;
    domain: string;
    enable: boolean;
    expiry: string;
    expirySecs: number;
    expression: string;
    extension: string;
    facility: string;
    forward?: boolean;
    fromProfile: string;
    hash: boolean;
    host: string;
    http: boolean;
    httpBasicAuth: boolean;
    httpCookie: boolean;
    httpHeader: boolean;
    httpHost?: boolean;
    httpReferer: boolean;
    httpReply: boolean;
    httpSetCookie: boolean;
    httpUri: boolean;
    ifile: string;
    insert: boolean;
    internalVirtual: string;
    ipAddress: string;
    key: string;
    l7dos: boolean;
    length: number;
    location: string;
    log: boolean;
    ltmPolicy: boolean;
    member: string;
    message: string;
    netmask: string;
    nexthop: string;
    node: string;
    offset: number;
    path: string;
    pem: boolean;
    persist: boolean;
    pin: boolean;
    policy: string;
    pool: string;
    port: number;
    priority: string;
    profile: string;
    protocol: string;
    queryString: string;
    rateclass: string;
    redirect: boolean;
    remove: boolean;
    replace: boolean;
    request: boolean;
    requestAdapt: boolean;
    reset: boolean;
    response: boolean;
    responseAdapt: boolean;
    scheme: string;
    script: string;
    select: boolean;
    serverSsl: boolean;
    setVariable: boolean;
    shutdown?: boolean;
    snat: string;
    snatpool: string;
    sourceAddress: boolean;
    sslClientHello: boolean;
    sslServerHandshake: boolean;
    sslServerHello: boolean;
    sslSessionId: boolean;
    status: number;
    tcl: boolean;
    tcpNagle: boolean;
    text: string;
    timeout: number;
    tmName: string;
    uie: boolean;
    universal: boolean;
    value: string;
    virtual: string;
    vlan: string;
    vlanId: number;
    wam: boolean;
    write: boolean;
}

export interface LtmPolicyRuleCondition {
    address: boolean;
    all: boolean;
    appService: string;
    browserType: boolean;
    browserVersion: boolean;
    caseInsensitive: boolean;
    caseSensitive: boolean;
    cipher: boolean;
    cipherBits: boolean;
    clientAccepted: boolean;
    clientSsl: boolean;
    code: boolean;
    commonName: boolean;
    contains: boolean;
    continent: boolean;
    countryCode: boolean;
    countryName: boolean;
    cpuUsage: boolean;
    datagroup?: string;
    deviceMake: boolean;
    deviceModel: boolean;
    domain: boolean;
    endsWith: boolean;
    equals: boolean;
    exists: boolean;
    expiry: boolean;
    extension: boolean;
    external: boolean;
    geoip: boolean;
    greater: boolean;
    greaterOrEqual: boolean;
    host: boolean;
    httpBasicAuth: boolean;
    httpCookie: boolean;
    httpHeader: boolean;
    httpHost: boolean;
    httpMethod: boolean;
    httpReferer: boolean;
    httpSetCookie: boolean;
    httpStatus: boolean;
    httpUri: boolean;
    httpUserAgent: boolean;
    httpVersion: boolean;
    index: number;
    internal: boolean;
    isp: boolean;
    last15secs: boolean;
    last1min: boolean;
    last5mins: boolean;
    less: boolean;
    lessOrEqual: boolean;
    local: boolean;
    major: boolean;
    matches: boolean;
    minor: boolean;
    missing: boolean;
    mss: boolean;
    not: boolean;
    org: boolean;
    password: boolean;
    path: boolean;
    pathSegment: boolean;
    port: boolean;
    present: boolean;
    protocol: boolean;
    queryParameter: boolean;
    queryString: boolean;
    regionCode: boolean;
    regionName: boolean;
    remote: boolean;
    request: boolean;
    response: boolean;
    routeDomain: boolean;
    rtt: boolean;
    scheme: boolean;
    serverName: boolean;
    sslCert: boolean;
    sslClientHello: boolean;
    sslExtension: boolean;
    sslServerHandshake: boolean;
    sslServerHello: boolean;
    startsWith: boolean;
    tcp: boolean;
    text: boolean;
    tmName: string;
    unnamedQueryParameter: boolean;
    userAgentToken: boolean;
    username: boolean;
    value: boolean;
    values: string[];
    version: boolean;
    vlan: boolean;
    vlanId: boolean;
}

export interface LtmProfileClientSslCertKeyChain {
    /**
     * Cert file name
     */
    cert?: string;
    /**
     * Chain file name
     */
    chain?: string;
    /**
     * Key filename
     */
    key?: string;
    /**
     * Name
     */
    name?: string;
    /**
     * Key passphrase
     */
    passphrase: string;
}

export interface LtmProfileHttpEnforcement {
    /**
     * Specifies which HTTP methods count as being known. Removing RFC-defined methods from this list will cause the HTTP filter to not recognize them.
     */
    knownMethods: string[];
    /**
     * Specifies the maximum number of headers allowed in HTTP request/response.
     */
    maxHeaderCount: number;
    /**
     * Specifies the maximum header size.
     */
    maxHeaderSize: number;
    /**
     * Specifies whether to allow, reject or switch to pass-through mode when an unknown HTTP method is parsed.
     */
    unknownMethod: string;
}

export interface LtmProfileHttpHttpStrictTransportSecurity {
    /**
     * Specifies whether to include the includeSubdomains directive in the HSTS header.
     */
    includeSubdomains: string;
    /**
     * Specifies the maximum age to assume the connection should remain secure.
     */
    maximumAge: number;
    /**
     * Specifies whether to include the HSTS response header.
     */
    mode: string;
    /**
     * Specifies whether to include the preload directive in the HSTS header.
     */
    preload: string;
}

export interface LtmProfileRewriteCookieRule {
    clientDomain: string;
    clientPath: string;
    /**
     * Name of the cookie rewrite rule.
     */
    ruleName: string;
    serverDomain: string;
    serverPath: string;
}

export interface LtmProfileRewriteRequest {
    /**
     * Enable to add the X-Forwarded For (XFF) header, to specify the originating IP address of the client.
     */
    insertXfwdFor?: string;
    /**
     * Enable to add the X-Forwarded Host header, to specify the originating host of the client.
     */
    insertXfwdHost?: string;
    /**
     * Enable to add the X-Forwarded Proto header, to specify the originating protocol of the client.
     */
    insertXfwdProtocol?: string;
    /**
     * Enable to rewrite headers in Request settings.
     */
    rewriteHeaders?: string;
}

export interface LtmProfileRewriteResponse {
    /**
     * Enable to rewrite links in content in the response.
     */
    rewriteContent?: string;
    /**
     * Enable to rewrite headers in the response.
     */
    rewriteHeaders?: string;
}

export interface LtmProfileRewriteUriRulesClient {
    /**
     * Host part of the uri, e.g. www.foo.com.
     */
    host: string;
    /**
     * Path part of the uri, when unspecified a trailing `/` is assumed.
     */
    path?: string;
    /**
     * Port part of the uri, when not defined 'none' value is assumed.
     */
    port?: string;
    /**
     * Scheme part of the uri, e.g. https, ftp etc.
     */
    scheme: string;
}

export interface LtmProfileRewriteUriRulesServer {
    /**
     * Host part of the uri, e.g. www.foo.com
     */
    host: string;
    /**
     * Path part of the uri, when unspecified a trailing `/` is assumed.
     */
    path?: string;
    /**
     * Port part of the uri, when not defined 'none' value is assumed.
     */
    port?: string;
    /**
     * Scheme part of the uri, e.g. https, ftp etc.
     */
    scheme: string;
}

export interface LtmSnatOrigin {
    /**
     * app service
     */
    appService?: string;
    /**
     * Name of origin
     */
    name?: string;
}

export interface NetVlanInterface {
    /**
     * Interface tagged
     */
    tagged?: boolean;
    /**
     * Vlan name
     */
    vlanport?: string;
}

export interface SysIappList {
    /**
     * Name of origin
     */
    encrypted?: string;
    /**
     * Name of origin
     */
    value?: string;
}

export interface SysIappMetadata {
    /**
     * Name of origin
     */
    persists?: string;
    /**
     * Name of origin
     */
    value?: string;
}

export interface SysIappTable {
    columnNames?: string[];
    /**
     * Name of origin
     */
    encryptedColumns?: string;
    /**
     * Name of origin
     */
    name?: string;
    rows?: outputs.SysIappTableRow[];
}

export interface SysIappTableRow {
    rows?: string[];
}

export interface SysIappVariable {
    /**
     * Name of origin
     */
    encrypted?: string;
    /**
     * Name of origin
     */
    name?: string;
    /**
     * Name of origin
     */
    value?: string;
}

export interface WafPolicyFileType {
    /**
     * Determines whether the file type is allowed or disallowed. In either of these cases the VIOL_FILETYPE violation is issued (if enabled) for an incoming request- 
     *  1. No allowed file type matched the file type of the request. 
     *  2. The file type of the request matched a disallowed file type
     */
    allowed?: boolean;
    name?: string;
    type?: string;
}

export interface WafPolicyGraphqlProfile {
    /**
     * Specifies when checked (enabled) that you want attack signatures and threat campaigns to be detected on this GraphQL profile and possibly override the security policy settings of an attack signature or threat campaign specifically for this GraphQL profile. After you enable this setting, the system displays a list of attack signatures and and threat campaigns. The default is enabled
     */
    attackSignaturesCheck?: boolean;
    /**
     * defense_attributes settings for policy
     */
    defenseAttributes?: outputs.WafPolicyGraphqlProfileDefenseAttribute[];
    /**
     * Specifies when checked (enabled) that the system enforces the security policy settings of a meta character for the GraphQL profile. After you enable this setting, the system displays a list of meta characters. The default is enabled
     */
    metacharElementcheck?: boolean;
    /**
     * Specifies the unique name of the GraphQL profile you are creating or editing
     */
    name: string;
}

export interface WafPolicyGraphqlProfileDefenseAttribute {
    /**
     * Introspection queries can also be enforced to prevent attackers from using them to
     * understand the API structure and potentially breach an application
     */
    allowIntrospectionQueries?: boolean;
    /**
     * Specifies the highest number of batched queries allowed by the security policy. The default setting is 10
     */
    maximumBatchedQueries?: string;
    /**
     * Specifies the greatest nesting depth found in the GraphQL structure allowed by the security policy. The default setting is a specified depth of 10.
     */
    maximumStructureDepth?: string;
    /**
     * Specifies the longest length, in bytes, allowed by the security policy of the request payload, or parameter value, where the GraphQL data was found. The default setting is a specified length of 100000 bytes
     */
    maximumTotalLength?: string;
    /**
     * Specifies the longest length (in bytes) of the longest GraphQL element value in the document allowed by the security policy. The default setting is a specified length of 10000 bytes
     */
    maximumValueLength?: string;
    /**
     * Specifies, when checked (enabled), that the system does not report when the security enforcer encounters warnings while parsing GraphQL content. Specifies when cleared (disabled), that the security policy reports when the security enforcer encounters warnings while parsing GraphQL content. The default setting is disabled
     */
    tolerateParsingWarnings?: boolean;
}

export interface WafPolicyHostName {
    name?: string;
}

export interface WafPolicyIpException {
    blockRequests?: string;
    /**
     * Specifies a brief description of the IP address
     */
    description?: string;
    /**
     * Specifies when enabled that the system considers this IP address legitimate and does not take it into account when performing brute force prevention
     */
    ignoreAnomalies?: boolean;
    /**
     * Specifies when enabled that the system considers this IP address legitimate even if it is found in the IP Intelligence database (a database of questionable IP addresses)
     */
    ignoreIpreputation?: boolean;
    /**
     * Specifies the IP address that you want the system to trust
     */
    ipAddress: string;
    /**
     * Specifies the netmask of the exceptional IP address. This is an optional field
     */
    ipMask: string;
    /**
     * Specifies when enabled the Policy Builder considers traffic from this IP address as being safe
     */
    trustedbyPolicybuilder?: boolean;
}

export interface WafPolicyPolicyBuilder {
    learningMode?: string;
}

export interface WafPolicySignaturesSetting {
    placesignaturesInStaging?: boolean;
    /**
     * setting true will enforce all signature from staging
     */
    signatureStaging?: boolean;
}

