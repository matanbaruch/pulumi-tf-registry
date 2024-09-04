// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WebsiteMonitor extends pulumi.CustomResource {
    /**
     * Get an existing WebsiteMonitor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WebsiteMonitorState, opts?: pulumi.CustomResourceOptions): WebsiteMonitor {
        return new WebsiteMonitor(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'site24x7:index/websiteMonitor:WebsiteMonitor';

    /**
     * Returns true if the given object is an instance of WebsiteMonitor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebsiteMonitor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebsiteMonitor.__pulumiType;
    }

    /**
     * Action to be performed on monitor IT Automation templates.
     */
    public readonly actions!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Authentication method to access the website. Default value is 'B'. 'B' denotes Basic/NTLM. 'O' denotes OAuth 2 and 'W'
     * denotes Web Token.
     */
    public readonly authMethod!: pulumi.Output<string | undefined>;
    /**
     * Authentication password to access the website.
     */
    public readonly authPass!: pulumi.Output<string | undefined>;
    /**
     * Authentication user name to access the website.
     */
    public readonly authUser!: pulumi.Output<string | undefined>;
    /**
     * Interval at which your website has to be monitored. Default value is 1 minute.
     */
    public readonly checkFrequency!: pulumi.Output<string | undefined>;
    /**
     * Password of the client certificate.
     */
    public readonly clientCertificatePassword!: pulumi.Output<string | undefined>;
    /**
     * Credential Profile to associate.
     */
    public readonly credentialProfileId!: pulumi.Output<string | undefined>;
    /**
     * List of dependent resource IDs. Suppress alert when dependent monitor(s) is down.
     */
    public readonly dependencyResourceIds!: pulumi.Output<string[] | undefined>;
    /**
     * Display Name for the monitor.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Enter true to follow up to 10 HTTP redirection responses or false not to follow HTTP redirections. Default value is
     * true.
     */
    public readonly followHttpRedirection!: pulumi.Output<boolean | undefined>;
    /**
     * Provide the domain name or IP addresses to be used for monitoring instead of using the IPs resolved from the given URL.
     */
    public readonly forcedIps!: pulumi.Output<string | undefined>;
    /**
     * To Edit the existing secondary protocol resource
     */
    public readonly hiddenMonAdded!: pulumi.Output<number | undefined>;
    /**
     * HTTP Method to be used for accessing the website. Default value is 'G'. 'G' denotes GET, 'P' denotes POST and 'H'
     * denotes HEAD. PUT, PATCH and DELETE are not supported.
     */
    public readonly httpMethod!: pulumi.Output<string | undefined>;
    /**
     * Specify the version of the HTTP protocol. Default value is H1.1.
     */
    public readonly httpProtocol!: pulumi.Output<string | undefined>;
    /**
     * Enter true or false to Trust the Server SSL Certificate. Default value is true.
     */
    public readonly ignoreCertErr!: pulumi.Output<boolean | undefined>;
    /**
     * Monitoring is performed over the selected internet protocol. 0 - Monitoring is performed over IPv4 from supported
     * locations. 1 - Monitoring is performed over IPv6 from supported locations. 2 - IPv4 or IPv6 option will help in flexibly
     * switching to the protocol that is supported in a particular location if one protocol fails. 3 - IPv4 and IPv6 will
     * create two connections for each protocol. Default value is 0.
     */
    public readonly ipType!: pulumi.Output<number | undefined>;
    /**
     * Location profile to be associated with the monitor.
     */
    public readonly locationProfileId!: pulumi.Output<string>;
    /**
     * Name of the location profile to be associated with the monitor.
     */
    public readonly locationProfileName!: pulumi.Output<string>;
    /**
     * Perform case sensitive keyword search or not.
     */
    public readonly matchCase!: pulumi.Output<boolean | undefined>;
    /**
     * Severity with which alert has to raised when the matching regex is found in the website response.
     */
    public readonly matchRegexSeverity!: pulumi.Output<number | undefined>;
    /**
     * Match the regular expression in the website response.
     */
    public readonly matchRegexValue!: pulumi.Output<string | undefined>;
    /**
     * Severity with which alert has to raised when the matching keyword is found in the website response.
     */
    public readonly matchingKeywordSeverity!: pulumi.Output<number | undefined>;
    /**
     * Check for the keyword in the website response.
     */
    public readonly matchingKeywordValue!: pulumi.Output<string | undefined>;
    /**
     * List of monitor groups to which the monitor has to be associated.
     */
    public readonly monitorGroups!: pulumi.Output<string[] | undefined>;
    /**
     * Notification profile to be associated with the monitor.
     */
    public readonly notificationProfileId!: pulumi.Output<string>;
    /**
     * Name of the notification profile to be associated with the monitor.
     */
    public readonly notificationProfileName!: pulumi.Output<string | undefined>;
    /**
     * Choose the primary internet protocol for the resources
     */
    public readonly primaryProtocol!: pulumi.Output<number | undefined>;
    /**
     * Provide the content to be passed in the request body while accessing the website.
     */
    public readonly requestBody!: pulumi.Output<string | undefined>;
    /**
     * Provide content type for request params when http_method is 'P'. 'J' denotes JSON, 'T' denotes TEXT, 'X' denotes XML and
     * 'F' denotes FORM
     */
    public readonly requestContentType!: pulumi.Output<string | undefined>;
    /**
     * A Map of request header name and value.
     */
    public readonly requestHeaders!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A Map of respone header name and value.
     */
    public readonly responseHeaders!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Alert type constant. Can be either 0 or 2. '0' denotes Down and '2' denotes Trouble
     */
    public readonly responseHeadersSeverity!: pulumi.Output<number | undefined>;
    /**
     * Configure the change for the secondary resource for which you want to get notified
     */
    public readonly secondaryProtocolSeverity!: pulumi.Output<number | undefined>;
    /**
     * Specify the version of the SSL protocol. If you are not sure about the version, use Auto.
     */
    public readonly sslProtocol!: pulumi.Output<string | undefined>;
    /**
     * List of tag IDs to be associated to the monitor.
     */
    public readonly tagIds!: pulumi.Output<string[]>;
    /**
     * List of tag names to be associated to the monitor.
     */
    public readonly tagNames!: pulumi.Output<string[] | undefined>;
    /**
     * List of Third Party Service IDs to be associated to the monitor.
     */
    public readonly thirdPartyServiceIds!: pulumi.Output<string[] | undefined>;
    /**
     * Threshold profile to be associated with the monitor.
     */
    public readonly thresholdProfileId!: pulumi.Output<string>;
    /**
     * Timeout for connecting to website. Default value is 10. Range 1 - 45.
     */
    public readonly timeout!: pulumi.Output<number | undefined>;
    /**
     * Severity with which alert has to raised when the keyword is not present in the website response.
     */
    public readonly unmatchingKeywordSeverity!: pulumi.Output<number | undefined>;
    /**
     * Check for the absence of the keyword in the website response.
     */
    public readonly unmatchingKeywordValue!: pulumi.Output<string | undefined>;
    /**
     * Provide a comma-separated list of HTTP status codes that indicate a successful response. You can specify individual
     * status codes, as well as ranges separated with a colon.
     */
    public readonly upStatusCodes!: pulumi.Output<string | undefined>;
    /**
     * Enable ALPN to send supported protocols as part of the TLS handshake.
     */
    public readonly useAlpn!: pulumi.Output<boolean | undefined>;
    /**
     * Resolve the IP address using Domain Name Server.
     */
    public readonly useNameServer!: pulumi.Output<boolean | undefined>;
    /**
     * User Agent to be used while monitoring the website.
     */
    public readonly userAgent!: pulumi.Output<string | undefined>;
    /**
     * List of user groups to be notified when the monitor is down.
     */
    public readonly userGroupIds!: pulumi.Output<string[]>;
    /**
     * Name of the user groups to be associated with the monitor.
     */
    public readonly userGroupNames!: pulumi.Output<string[] | undefined>;
    /**
     * Website address to monitor.
     */
    public readonly website!: pulumi.Output<string>;

    /**
     * Create a WebsiteMonitor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebsiteMonitorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WebsiteMonitorArgs | WebsiteMonitorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WebsiteMonitorState | undefined;
            resourceInputs["actions"] = state ? state.actions : undefined;
            resourceInputs["authMethod"] = state ? state.authMethod : undefined;
            resourceInputs["authPass"] = state ? state.authPass : undefined;
            resourceInputs["authUser"] = state ? state.authUser : undefined;
            resourceInputs["checkFrequency"] = state ? state.checkFrequency : undefined;
            resourceInputs["clientCertificatePassword"] = state ? state.clientCertificatePassword : undefined;
            resourceInputs["credentialProfileId"] = state ? state.credentialProfileId : undefined;
            resourceInputs["dependencyResourceIds"] = state ? state.dependencyResourceIds : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["followHttpRedirection"] = state ? state.followHttpRedirection : undefined;
            resourceInputs["forcedIps"] = state ? state.forcedIps : undefined;
            resourceInputs["hiddenMonAdded"] = state ? state.hiddenMonAdded : undefined;
            resourceInputs["httpMethod"] = state ? state.httpMethod : undefined;
            resourceInputs["httpProtocol"] = state ? state.httpProtocol : undefined;
            resourceInputs["ignoreCertErr"] = state ? state.ignoreCertErr : undefined;
            resourceInputs["ipType"] = state ? state.ipType : undefined;
            resourceInputs["locationProfileId"] = state ? state.locationProfileId : undefined;
            resourceInputs["locationProfileName"] = state ? state.locationProfileName : undefined;
            resourceInputs["matchCase"] = state ? state.matchCase : undefined;
            resourceInputs["matchRegexSeverity"] = state ? state.matchRegexSeverity : undefined;
            resourceInputs["matchRegexValue"] = state ? state.matchRegexValue : undefined;
            resourceInputs["matchingKeywordSeverity"] = state ? state.matchingKeywordSeverity : undefined;
            resourceInputs["matchingKeywordValue"] = state ? state.matchingKeywordValue : undefined;
            resourceInputs["monitorGroups"] = state ? state.monitorGroups : undefined;
            resourceInputs["notificationProfileId"] = state ? state.notificationProfileId : undefined;
            resourceInputs["notificationProfileName"] = state ? state.notificationProfileName : undefined;
            resourceInputs["primaryProtocol"] = state ? state.primaryProtocol : undefined;
            resourceInputs["requestBody"] = state ? state.requestBody : undefined;
            resourceInputs["requestContentType"] = state ? state.requestContentType : undefined;
            resourceInputs["requestHeaders"] = state ? state.requestHeaders : undefined;
            resourceInputs["responseHeaders"] = state ? state.responseHeaders : undefined;
            resourceInputs["responseHeadersSeverity"] = state ? state.responseHeadersSeverity : undefined;
            resourceInputs["secondaryProtocolSeverity"] = state ? state.secondaryProtocolSeverity : undefined;
            resourceInputs["sslProtocol"] = state ? state.sslProtocol : undefined;
            resourceInputs["tagIds"] = state ? state.tagIds : undefined;
            resourceInputs["tagNames"] = state ? state.tagNames : undefined;
            resourceInputs["thirdPartyServiceIds"] = state ? state.thirdPartyServiceIds : undefined;
            resourceInputs["thresholdProfileId"] = state ? state.thresholdProfileId : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
            resourceInputs["unmatchingKeywordSeverity"] = state ? state.unmatchingKeywordSeverity : undefined;
            resourceInputs["unmatchingKeywordValue"] = state ? state.unmatchingKeywordValue : undefined;
            resourceInputs["upStatusCodes"] = state ? state.upStatusCodes : undefined;
            resourceInputs["useAlpn"] = state ? state.useAlpn : undefined;
            resourceInputs["useNameServer"] = state ? state.useNameServer : undefined;
            resourceInputs["userAgent"] = state ? state.userAgent : undefined;
            resourceInputs["userGroupIds"] = state ? state.userGroupIds : undefined;
            resourceInputs["userGroupNames"] = state ? state.userGroupNames : undefined;
            resourceInputs["website"] = state ? state.website : undefined;
        } else {
            const args = argsOrState as WebsiteMonitorArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.website === undefined) && !opts.urn) {
                throw new Error("Missing required property 'website'");
            }
            resourceInputs["actions"] = args ? args.actions : undefined;
            resourceInputs["authMethod"] = args ? args.authMethod : undefined;
            resourceInputs["authPass"] = args ? args.authPass : undefined;
            resourceInputs["authUser"] = args ? args.authUser : undefined;
            resourceInputs["checkFrequency"] = args ? args.checkFrequency : undefined;
            resourceInputs["clientCertificatePassword"] = args ? args.clientCertificatePassword : undefined;
            resourceInputs["credentialProfileId"] = args ? args.credentialProfileId : undefined;
            resourceInputs["dependencyResourceIds"] = args ? args.dependencyResourceIds : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["followHttpRedirection"] = args ? args.followHttpRedirection : undefined;
            resourceInputs["forcedIps"] = args ? args.forcedIps : undefined;
            resourceInputs["hiddenMonAdded"] = args ? args.hiddenMonAdded : undefined;
            resourceInputs["httpMethod"] = args ? args.httpMethod : undefined;
            resourceInputs["httpProtocol"] = args ? args.httpProtocol : undefined;
            resourceInputs["ignoreCertErr"] = args ? args.ignoreCertErr : undefined;
            resourceInputs["ipType"] = args ? args.ipType : undefined;
            resourceInputs["locationProfileId"] = args ? args.locationProfileId : undefined;
            resourceInputs["locationProfileName"] = args ? args.locationProfileName : undefined;
            resourceInputs["matchCase"] = args ? args.matchCase : undefined;
            resourceInputs["matchRegexSeverity"] = args ? args.matchRegexSeverity : undefined;
            resourceInputs["matchRegexValue"] = args ? args.matchRegexValue : undefined;
            resourceInputs["matchingKeywordSeverity"] = args ? args.matchingKeywordSeverity : undefined;
            resourceInputs["matchingKeywordValue"] = args ? args.matchingKeywordValue : undefined;
            resourceInputs["monitorGroups"] = args ? args.monitorGroups : undefined;
            resourceInputs["notificationProfileId"] = args ? args.notificationProfileId : undefined;
            resourceInputs["notificationProfileName"] = args ? args.notificationProfileName : undefined;
            resourceInputs["primaryProtocol"] = args ? args.primaryProtocol : undefined;
            resourceInputs["requestBody"] = args ? args.requestBody : undefined;
            resourceInputs["requestContentType"] = args ? args.requestContentType : undefined;
            resourceInputs["requestHeaders"] = args ? args.requestHeaders : undefined;
            resourceInputs["responseHeaders"] = args ? args.responseHeaders : undefined;
            resourceInputs["responseHeadersSeverity"] = args ? args.responseHeadersSeverity : undefined;
            resourceInputs["secondaryProtocolSeverity"] = args ? args.secondaryProtocolSeverity : undefined;
            resourceInputs["sslProtocol"] = args ? args.sslProtocol : undefined;
            resourceInputs["tagIds"] = args ? args.tagIds : undefined;
            resourceInputs["tagNames"] = args ? args.tagNames : undefined;
            resourceInputs["thirdPartyServiceIds"] = args ? args.thirdPartyServiceIds : undefined;
            resourceInputs["thresholdProfileId"] = args ? args.thresholdProfileId : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
            resourceInputs["unmatchingKeywordSeverity"] = args ? args.unmatchingKeywordSeverity : undefined;
            resourceInputs["unmatchingKeywordValue"] = args ? args.unmatchingKeywordValue : undefined;
            resourceInputs["upStatusCodes"] = args ? args.upStatusCodes : undefined;
            resourceInputs["useAlpn"] = args ? args.useAlpn : undefined;
            resourceInputs["useNameServer"] = args ? args.useNameServer : undefined;
            resourceInputs["userAgent"] = args ? args.userAgent : undefined;
            resourceInputs["userGroupIds"] = args ? args.userGroupIds : undefined;
            resourceInputs["userGroupNames"] = args ? args.userGroupNames : undefined;
            resourceInputs["website"] = args ? args.website : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WebsiteMonitor.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WebsiteMonitor resources.
 */
export interface WebsiteMonitorState {
    /**
     * Action to be performed on monitor IT Automation templates.
     */
    actions?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Authentication method to access the website. Default value is 'B'. 'B' denotes Basic/NTLM. 'O' denotes OAuth 2 and 'W'
     * denotes Web Token.
     */
    authMethod?: pulumi.Input<string>;
    /**
     * Authentication password to access the website.
     */
    authPass?: pulumi.Input<string>;
    /**
     * Authentication user name to access the website.
     */
    authUser?: pulumi.Input<string>;
    /**
     * Interval at which your website has to be monitored. Default value is 1 minute.
     */
    checkFrequency?: pulumi.Input<string>;
    /**
     * Password of the client certificate.
     */
    clientCertificatePassword?: pulumi.Input<string>;
    /**
     * Credential Profile to associate.
     */
    credentialProfileId?: pulumi.Input<string>;
    /**
     * List of dependent resource IDs. Suppress alert when dependent monitor(s) is down.
     */
    dependencyResourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Display Name for the monitor.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Enter true to follow up to 10 HTTP redirection responses or false not to follow HTTP redirections. Default value is
     * true.
     */
    followHttpRedirection?: pulumi.Input<boolean>;
    /**
     * Provide the domain name or IP addresses to be used for monitoring instead of using the IPs resolved from the given URL.
     */
    forcedIps?: pulumi.Input<string>;
    /**
     * To Edit the existing secondary protocol resource
     */
    hiddenMonAdded?: pulumi.Input<number>;
    /**
     * HTTP Method to be used for accessing the website. Default value is 'G'. 'G' denotes GET, 'P' denotes POST and 'H'
     * denotes HEAD. PUT, PATCH and DELETE are not supported.
     */
    httpMethod?: pulumi.Input<string>;
    /**
     * Specify the version of the HTTP protocol. Default value is H1.1.
     */
    httpProtocol?: pulumi.Input<string>;
    /**
     * Enter true or false to Trust the Server SSL Certificate. Default value is true.
     */
    ignoreCertErr?: pulumi.Input<boolean>;
    /**
     * Monitoring is performed over the selected internet protocol. 0 - Monitoring is performed over IPv4 from supported
     * locations. 1 - Monitoring is performed over IPv6 from supported locations. 2 - IPv4 or IPv6 option will help in flexibly
     * switching to the protocol that is supported in a particular location if one protocol fails. 3 - IPv4 and IPv6 will
     * create two connections for each protocol. Default value is 0.
     */
    ipType?: pulumi.Input<number>;
    /**
     * Location profile to be associated with the monitor.
     */
    locationProfileId?: pulumi.Input<string>;
    /**
     * Name of the location profile to be associated with the monitor.
     */
    locationProfileName?: pulumi.Input<string>;
    /**
     * Perform case sensitive keyword search or not.
     */
    matchCase?: pulumi.Input<boolean>;
    /**
     * Severity with which alert has to raised when the matching regex is found in the website response.
     */
    matchRegexSeverity?: pulumi.Input<number>;
    /**
     * Match the regular expression in the website response.
     */
    matchRegexValue?: pulumi.Input<string>;
    /**
     * Severity with which alert has to raised when the matching keyword is found in the website response.
     */
    matchingKeywordSeverity?: pulumi.Input<number>;
    /**
     * Check for the keyword in the website response.
     */
    matchingKeywordValue?: pulumi.Input<string>;
    /**
     * List of monitor groups to which the monitor has to be associated.
     */
    monitorGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Notification profile to be associated with the monitor.
     */
    notificationProfileId?: pulumi.Input<string>;
    /**
     * Name of the notification profile to be associated with the monitor.
     */
    notificationProfileName?: pulumi.Input<string>;
    /**
     * Choose the primary internet protocol for the resources
     */
    primaryProtocol?: pulumi.Input<number>;
    /**
     * Provide the content to be passed in the request body while accessing the website.
     */
    requestBody?: pulumi.Input<string>;
    /**
     * Provide content type for request params when http_method is 'P'. 'J' denotes JSON, 'T' denotes TEXT, 'X' denotes XML and
     * 'F' denotes FORM
     */
    requestContentType?: pulumi.Input<string>;
    /**
     * A Map of request header name and value.
     */
    requestHeaders?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A Map of respone header name and value.
     */
    responseHeaders?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Alert type constant. Can be either 0 or 2. '0' denotes Down and '2' denotes Trouble
     */
    responseHeadersSeverity?: pulumi.Input<number>;
    /**
     * Configure the change for the secondary resource for which you want to get notified
     */
    secondaryProtocolSeverity?: pulumi.Input<number>;
    /**
     * Specify the version of the SSL protocol. If you are not sure about the version, use Auto.
     */
    sslProtocol?: pulumi.Input<string>;
    /**
     * List of tag IDs to be associated to the monitor.
     */
    tagIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of tag names to be associated to the monitor.
     */
    tagNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of Third Party Service IDs to be associated to the monitor.
     */
    thirdPartyServiceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Threshold profile to be associated with the monitor.
     */
    thresholdProfileId?: pulumi.Input<string>;
    /**
     * Timeout for connecting to website. Default value is 10. Range 1 - 45.
     */
    timeout?: pulumi.Input<number>;
    /**
     * Severity with which alert has to raised when the keyword is not present in the website response.
     */
    unmatchingKeywordSeverity?: pulumi.Input<number>;
    /**
     * Check for the absence of the keyword in the website response.
     */
    unmatchingKeywordValue?: pulumi.Input<string>;
    /**
     * Provide a comma-separated list of HTTP status codes that indicate a successful response. You can specify individual
     * status codes, as well as ranges separated with a colon.
     */
    upStatusCodes?: pulumi.Input<string>;
    /**
     * Enable ALPN to send supported protocols as part of the TLS handshake.
     */
    useAlpn?: pulumi.Input<boolean>;
    /**
     * Resolve the IP address using Domain Name Server.
     */
    useNameServer?: pulumi.Input<boolean>;
    /**
     * User Agent to be used while monitoring the website.
     */
    userAgent?: pulumi.Input<string>;
    /**
     * List of user groups to be notified when the monitor is down.
     */
    userGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the user groups to be associated with the monitor.
     */
    userGroupNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Website address to monitor.
     */
    website?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WebsiteMonitor resource.
 */
export interface WebsiteMonitorArgs {
    /**
     * Action to be performed on monitor IT Automation templates.
     */
    actions?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Authentication method to access the website. Default value is 'B'. 'B' denotes Basic/NTLM. 'O' denotes OAuth 2 and 'W'
     * denotes Web Token.
     */
    authMethod?: pulumi.Input<string>;
    /**
     * Authentication password to access the website.
     */
    authPass?: pulumi.Input<string>;
    /**
     * Authentication user name to access the website.
     */
    authUser?: pulumi.Input<string>;
    /**
     * Interval at which your website has to be monitored. Default value is 1 minute.
     */
    checkFrequency?: pulumi.Input<string>;
    /**
     * Password of the client certificate.
     */
    clientCertificatePassword?: pulumi.Input<string>;
    /**
     * Credential Profile to associate.
     */
    credentialProfileId?: pulumi.Input<string>;
    /**
     * List of dependent resource IDs. Suppress alert when dependent monitor(s) is down.
     */
    dependencyResourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Display Name for the monitor.
     */
    displayName: pulumi.Input<string>;
    /**
     * Enter true to follow up to 10 HTTP redirection responses or false not to follow HTTP redirections. Default value is
     * true.
     */
    followHttpRedirection?: pulumi.Input<boolean>;
    /**
     * Provide the domain name or IP addresses to be used for monitoring instead of using the IPs resolved from the given URL.
     */
    forcedIps?: pulumi.Input<string>;
    /**
     * To Edit the existing secondary protocol resource
     */
    hiddenMonAdded?: pulumi.Input<number>;
    /**
     * HTTP Method to be used for accessing the website. Default value is 'G'. 'G' denotes GET, 'P' denotes POST and 'H'
     * denotes HEAD. PUT, PATCH and DELETE are not supported.
     */
    httpMethod?: pulumi.Input<string>;
    /**
     * Specify the version of the HTTP protocol. Default value is H1.1.
     */
    httpProtocol?: pulumi.Input<string>;
    /**
     * Enter true or false to Trust the Server SSL Certificate. Default value is true.
     */
    ignoreCertErr?: pulumi.Input<boolean>;
    /**
     * Monitoring is performed over the selected internet protocol. 0 - Monitoring is performed over IPv4 from supported
     * locations. 1 - Monitoring is performed over IPv6 from supported locations. 2 - IPv4 or IPv6 option will help in flexibly
     * switching to the protocol that is supported in a particular location if one protocol fails. 3 - IPv4 and IPv6 will
     * create two connections for each protocol. Default value is 0.
     */
    ipType?: pulumi.Input<number>;
    /**
     * Location profile to be associated with the monitor.
     */
    locationProfileId?: pulumi.Input<string>;
    /**
     * Name of the location profile to be associated with the monitor.
     */
    locationProfileName?: pulumi.Input<string>;
    /**
     * Perform case sensitive keyword search or not.
     */
    matchCase?: pulumi.Input<boolean>;
    /**
     * Severity with which alert has to raised when the matching regex is found in the website response.
     */
    matchRegexSeverity?: pulumi.Input<number>;
    /**
     * Match the regular expression in the website response.
     */
    matchRegexValue?: pulumi.Input<string>;
    /**
     * Severity with which alert has to raised when the matching keyword is found in the website response.
     */
    matchingKeywordSeverity?: pulumi.Input<number>;
    /**
     * Check for the keyword in the website response.
     */
    matchingKeywordValue?: pulumi.Input<string>;
    /**
     * List of monitor groups to which the monitor has to be associated.
     */
    monitorGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Notification profile to be associated with the monitor.
     */
    notificationProfileId?: pulumi.Input<string>;
    /**
     * Name of the notification profile to be associated with the monitor.
     */
    notificationProfileName?: pulumi.Input<string>;
    /**
     * Choose the primary internet protocol for the resources
     */
    primaryProtocol?: pulumi.Input<number>;
    /**
     * Provide the content to be passed in the request body while accessing the website.
     */
    requestBody?: pulumi.Input<string>;
    /**
     * Provide content type for request params when http_method is 'P'. 'J' denotes JSON, 'T' denotes TEXT, 'X' denotes XML and
     * 'F' denotes FORM
     */
    requestContentType?: pulumi.Input<string>;
    /**
     * A Map of request header name and value.
     */
    requestHeaders?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A Map of respone header name and value.
     */
    responseHeaders?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Alert type constant. Can be either 0 or 2. '0' denotes Down and '2' denotes Trouble
     */
    responseHeadersSeverity?: pulumi.Input<number>;
    /**
     * Configure the change for the secondary resource for which you want to get notified
     */
    secondaryProtocolSeverity?: pulumi.Input<number>;
    /**
     * Specify the version of the SSL protocol. If you are not sure about the version, use Auto.
     */
    sslProtocol?: pulumi.Input<string>;
    /**
     * List of tag IDs to be associated to the monitor.
     */
    tagIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of tag names to be associated to the monitor.
     */
    tagNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of Third Party Service IDs to be associated to the monitor.
     */
    thirdPartyServiceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Threshold profile to be associated with the monitor.
     */
    thresholdProfileId?: pulumi.Input<string>;
    /**
     * Timeout for connecting to website. Default value is 10. Range 1 - 45.
     */
    timeout?: pulumi.Input<number>;
    /**
     * Severity with which alert has to raised when the keyword is not present in the website response.
     */
    unmatchingKeywordSeverity?: pulumi.Input<number>;
    /**
     * Check for the absence of the keyword in the website response.
     */
    unmatchingKeywordValue?: pulumi.Input<string>;
    /**
     * Provide a comma-separated list of HTTP status codes that indicate a successful response. You can specify individual
     * status codes, as well as ranges separated with a colon.
     */
    upStatusCodes?: pulumi.Input<string>;
    /**
     * Enable ALPN to send supported protocols as part of the TLS handshake.
     */
    useAlpn?: pulumi.Input<boolean>;
    /**
     * Resolve the IP address using Domain Name Server.
     */
    useNameServer?: pulumi.Input<boolean>;
    /**
     * User Agent to be used while monitoring the website.
     */
    userAgent?: pulumi.Input<string>;
    /**
     * List of user groups to be notified when the monitor is down.
     */
    userGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the user groups to be associated with the monitor.
     */
    userGroupNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Website address to monitor.
     */
    website: pulumi.Input<string>;
}
