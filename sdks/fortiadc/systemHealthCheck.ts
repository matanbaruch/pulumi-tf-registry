// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemHealthCheck extends pulumi.CustomResource {
    /**
     * Get an existing SystemHealthCheck resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemHealthCheckState, opts?: pulumi.CustomResourceOptions): SystemHealthCheck {
        return new SystemHealthCheck(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiadc:index/systemHealthCheck:SystemHealthCheck';

    /**
     * Returns true if the given object is an instance of SystemHealthCheck.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemHealthCheck {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemHealthCheck.__pulumiType;
    }

    public readonly acctAppid!: pulumi.Output<string>;
    public readonly addrType!: pulumi.Output<string>;
    public readonly agentType!: pulumi.Output<string>;
    public readonly allowSslVersion!: pulumi.Output<string>;
    public readonly attribute!: pulumi.Output<string>;
    public readonly authAppid!: pulumi.Output<string>;
    public readonly basedn!: pulumi.Output<string>;
    public readonly binddn!: pulumi.Output<string>;
    public readonly column!: pulumi.Output<string>;
    public readonly community!: pulumi.Output<string>;
    public readonly compareType!: pulumi.Output<string>;
    public readonly connectString!: pulumi.Output<string>;
    public readonly connectType!: pulumi.Output<string>;
    public readonly counterValue!: pulumi.Output<string>;
    public readonly cpu!: pulumi.Output<string>;
    public readonly cpuWeight!: pulumi.Output<string>;
    public readonly database!: pulumi.Output<string>;
    public readonly destAddr!: pulumi.Output<string>;
    public readonly destAddr6!: pulumi.Output<string>;
    public readonly destAddrType!: pulumi.Output<string>;
    public readonly disk!: pulumi.Output<string>;
    public readonly diskWeight!: pulumi.Output<string>;
    public readonly domainName!: pulumi.Output<string>;
    public readonly downRetry!: pulumi.Output<string>;
    public readonly file!: pulumi.Output<string>;
    public readonly filter!: pulumi.Output<string>;
    public readonly folder!: pulumi.Output<string>;
    public readonly hostAddr!: pulumi.Output<string>;
    public readonly hostAddr6!: pulumi.Output<string>;
    public readonly hostIp6Addr!: pulumi.Output<string>;
    public readonly hostIpAddr!: pulumi.Output<string>;
    public readonly hostname!: pulumi.Output<string>;
    public readonly httpConnect!: pulumi.Output<string>;
    public readonly httpExtraString!: pulumi.Output<string>;
    public readonly httpVersion!: pulumi.Output<string>;
    public readonly interval!: pulumi.Output<string>;
    public readonly localCert!: pulumi.Output<string>;
    public readonly matchType!: pulumi.Output<string>;
    public readonly mem!: pulumi.Output<string>;
    public readonly memWeight!: pulumi.Output<string>;
    public readonly methodType!: pulumi.Output<string>;
    public readonly mkey!: pulumi.Output<string>;
    public readonly mssqlColumn!: pulumi.Output<string>;
    public readonly mssqlReceiveString!: pulumi.Output<string>;
    public readonly mssqlRow!: pulumi.Output<string>;
    public readonly mssqlSendString!: pulumi.Output<string>;
    public readonly mysqlServerType!: pulumi.Output<string>;
    public readonly nasIp!: pulumi.Output<string>;
    public readonly oid!: pulumi.Output<string>;
    public readonly oracleReceiveString!: pulumi.Output<string>;
    public readonly oracleSendString!: pulumi.Output<string>;
    public readonly originHost!: pulumi.Output<string>;
    public readonly originRealm!: pulumi.Output<string>;
    public readonly passive!: pulumi.Output<string>;
    public readonly password!: pulumi.Output<string>;
    public readonly port!: pulumi.Output<string>;
    public readonly productName!: pulumi.Output<string>;
    public readonly pwdType!: pulumi.Output<string>;
    public readonly radiusReject!: pulumi.Output<string>;
    public readonly receiveString!: pulumi.Output<string>;
    public readonly remoteHost!: pulumi.Output<string>;
    public readonly remotePassword!: pulumi.Output<string>;
    public readonly remotePort!: pulumi.Output<string>;
    public readonly remoteUsername!: pulumi.Output<string>;
    public readonly row!: pulumi.Output<string>;
    public readonly rtspDescribeUrl!: pulumi.Output<string>;
    public readonly rtspMethodType!: pulumi.Output<string>;
    public readonly script!: pulumi.Output<string>;
    public readonly secretKey!: pulumi.Output<string>;
    public readonly sendString!: pulumi.Output<string>;
    public readonly serviceName!: pulumi.Output<string>;
    public readonly sid!: pulumi.Output<string>;
    public readonly sipRequestType!: pulumi.Output<string>;
    public readonly sslCiphers!: pulumi.Output<string>;
    public readonly statusCode!: pulumi.Output<string>;
    public readonly stringValue!: pulumi.Output<string>;
    public readonly timeout!: pulumi.Output<string>;
    public readonly type!: pulumi.Output<string>;
    public readonly upRetry!: pulumi.Output<string>;
    public readonly username!: pulumi.Output<string>;
    public readonly valueType!: pulumi.Output<string>;
    public readonly vdom!: pulumi.Output<string | undefined>;
    public readonly vendorId!: pulumi.Output<string>;
    public readonly version!: pulumi.Output<string>;

    /**
     * Create a SystemHealthCheck resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemHealthCheckArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemHealthCheckArgs | SystemHealthCheckState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemHealthCheckState | undefined;
            resourceInputs["acctAppid"] = state ? state.acctAppid : undefined;
            resourceInputs["addrType"] = state ? state.addrType : undefined;
            resourceInputs["agentType"] = state ? state.agentType : undefined;
            resourceInputs["allowSslVersion"] = state ? state.allowSslVersion : undefined;
            resourceInputs["attribute"] = state ? state.attribute : undefined;
            resourceInputs["authAppid"] = state ? state.authAppid : undefined;
            resourceInputs["basedn"] = state ? state.basedn : undefined;
            resourceInputs["binddn"] = state ? state.binddn : undefined;
            resourceInputs["column"] = state ? state.column : undefined;
            resourceInputs["community"] = state ? state.community : undefined;
            resourceInputs["compareType"] = state ? state.compareType : undefined;
            resourceInputs["connectString"] = state ? state.connectString : undefined;
            resourceInputs["connectType"] = state ? state.connectType : undefined;
            resourceInputs["counterValue"] = state ? state.counterValue : undefined;
            resourceInputs["cpu"] = state ? state.cpu : undefined;
            resourceInputs["cpuWeight"] = state ? state.cpuWeight : undefined;
            resourceInputs["database"] = state ? state.database : undefined;
            resourceInputs["destAddr"] = state ? state.destAddr : undefined;
            resourceInputs["destAddr6"] = state ? state.destAddr6 : undefined;
            resourceInputs["destAddrType"] = state ? state.destAddrType : undefined;
            resourceInputs["disk"] = state ? state.disk : undefined;
            resourceInputs["diskWeight"] = state ? state.diskWeight : undefined;
            resourceInputs["domainName"] = state ? state.domainName : undefined;
            resourceInputs["downRetry"] = state ? state.downRetry : undefined;
            resourceInputs["file"] = state ? state.file : undefined;
            resourceInputs["filter"] = state ? state.filter : undefined;
            resourceInputs["folder"] = state ? state.folder : undefined;
            resourceInputs["hostAddr"] = state ? state.hostAddr : undefined;
            resourceInputs["hostAddr6"] = state ? state.hostAddr6 : undefined;
            resourceInputs["hostIp6Addr"] = state ? state.hostIp6Addr : undefined;
            resourceInputs["hostIpAddr"] = state ? state.hostIpAddr : undefined;
            resourceInputs["hostname"] = state ? state.hostname : undefined;
            resourceInputs["httpConnect"] = state ? state.httpConnect : undefined;
            resourceInputs["httpExtraString"] = state ? state.httpExtraString : undefined;
            resourceInputs["httpVersion"] = state ? state.httpVersion : undefined;
            resourceInputs["interval"] = state ? state.interval : undefined;
            resourceInputs["localCert"] = state ? state.localCert : undefined;
            resourceInputs["matchType"] = state ? state.matchType : undefined;
            resourceInputs["mem"] = state ? state.mem : undefined;
            resourceInputs["memWeight"] = state ? state.memWeight : undefined;
            resourceInputs["methodType"] = state ? state.methodType : undefined;
            resourceInputs["mkey"] = state ? state.mkey : undefined;
            resourceInputs["mssqlColumn"] = state ? state.mssqlColumn : undefined;
            resourceInputs["mssqlReceiveString"] = state ? state.mssqlReceiveString : undefined;
            resourceInputs["mssqlRow"] = state ? state.mssqlRow : undefined;
            resourceInputs["mssqlSendString"] = state ? state.mssqlSendString : undefined;
            resourceInputs["mysqlServerType"] = state ? state.mysqlServerType : undefined;
            resourceInputs["nasIp"] = state ? state.nasIp : undefined;
            resourceInputs["oid"] = state ? state.oid : undefined;
            resourceInputs["oracleReceiveString"] = state ? state.oracleReceiveString : undefined;
            resourceInputs["oracleSendString"] = state ? state.oracleSendString : undefined;
            resourceInputs["originHost"] = state ? state.originHost : undefined;
            resourceInputs["originRealm"] = state ? state.originRealm : undefined;
            resourceInputs["passive"] = state ? state.passive : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["productName"] = state ? state.productName : undefined;
            resourceInputs["pwdType"] = state ? state.pwdType : undefined;
            resourceInputs["radiusReject"] = state ? state.radiusReject : undefined;
            resourceInputs["receiveString"] = state ? state.receiveString : undefined;
            resourceInputs["remoteHost"] = state ? state.remoteHost : undefined;
            resourceInputs["remotePassword"] = state ? state.remotePassword : undefined;
            resourceInputs["remotePort"] = state ? state.remotePort : undefined;
            resourceInputs["remoteUsername"] = state ? state.remoteUsername : undefined;
            resourceInputs["row"] = state ? state.row : undefined;
            resourceInputs["rtspDescribeUrl"] = state ? state.rtspDescribeUrl : undefined;
            resourceInputs["rtspMethodType"] = state ? state.rtspMethodType : undefined;
            resourceInputs["script"] = state ? state.script : undefined;
            resourceInputs["secretKey"] = state ? state.secretKey : undefined;
            resourceInputs["sendString"] = state ? state.sendString : undefined;
            resourceInputs["serviceName"] = state ? state.serviceName : undefined;
            resourceInputs["sid"] = state ? state.sid : undefined;
            resourceInputs["sipRequestType"] = state ? state.sipRequestType : undefined;
            resourceInputs["sslCiphers"] = state ? state.sslCiphers : undefined;
            resourceInputs["statusCode"] = state ? state.statusCode : undefined;
            resourceInputs["stringValue"] = state ? state.stringValue : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["upRetry"] = state ? state.upRetry : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
            resourceInputs["valueType"] = state ? state.valueType : undefined;
            resourceInputs["vdom"] = state ? state.vdom : undefined;
            resourceInputs["vendorId"] = state ? state.vendorId : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as SystemHealthCheckArgs | undefined;
            if ((!args || args.mkey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mkey'");
            }
            resourceInputs["acctAppid"] = args ? args.acctAppid : undefined;
            resourceInputs["addrType"] = args ? args.addrType : undefined;
            resourceInputs["agentType"] = args ? args.agentType : undefined;
            resourceInputs["allowSslVersion"] = args ? args.allowSslVersion : undefined;
            resourceInputs["attribute"] = args ? args.attribute : undefined;
            resourceInputs["authAppid"] = args ? args.authAppid : undefined;
            resourceInputs["basedn"] = args ? args.basedn : undefined;
            resourceInputs["binddn"] = args ? args.binddn : undefined;
            resourceInputs["column"] = args ? args.column : undefined;
            resourceInputs["community"] = args ? args.community : undefined;
            resourceInputs["compareType"] = args ? args.compareType : undefined;
            resourceInputs["connectString"] = args ? args.connectString : undefined;
            resourceInputs["connectType"] = args ? args.connectType : undefined;
            resourceInputs["counterValue"] = args ? args.counterValue : undefined;
            resourceInputs["cpu"] = args ? args.cpu : undefined;
            resourceInputs["cpuWeight"] = args ? args.cpuWeight : undefined;
            resourceInputs["database"] = args ? args.database : undefined;
            resourceInputs["destAddr"] = args ? args.destAddr : undefined;
            resourceInputs["destAddr6"] = args ? args.destAddr6 : undefined;
            resourceInputs["destAddrType"] = args ? args.destAddrType : undefined;
            resourceInputs["disk"] = args ? args.disk : undefined;
            resourceInputs["diskWeight"] = args ? args.diskWeight : undefined;
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["downRetry"] = args ? args.downRetry : undefined;
            resourceInputs["file"] = args ? args.file : undefined;
            resourceInputs["filter"] = args ? args.filter : undefined;
            resourceInputs["folder"] = args ? args.folder : undefined;
            resourceInputs["hostAddr"] = args ? args.hostAddr : undefined;
            resourceInputs["hostAddr6"] = args ? args.hostAddr6 : undefined;
            resourceInputs["hostIp6Addr"] = args ? args.hostIp6Addr : undefined;
            resourceInputs["hostIpAddr"] = args ? args.hostIpAddr : undefined;
            resourceInputs["hostname"] = args ? args.hostname : undefined;
            resourceInputs["httpConnect"] = args ? args.httpConnect : undefined;
            resourceInputs["httpExtraString"] = args ? args.httpExtraString : undefined;
            resourceInputs["httpVersion"] = args ? args.httpVersion : undefined;
            resourceInputs["interval"] = args ? args.interval : undefined;
            resourceInputs["localCert"] = args ? args.localCert : undefined;
            resourceInputs["matchType"] = args ? args.matchType : undefined;
            resourceInputs["mem"] = args ? args.mem : undefined;
            resourceInputs["memWeight"] = args ? args.memWeight : undefined;
            resourceInputs["methodType"] = args ? args.methodType : undefined;
            resourceInputs["mkey"] = args ? args.mkey : undefined;
            resourceInputs["mssqlColumn"] = args ? args.mssqlColumn : undefined;
            resourceInputs["mssqlReceiveString"] = args ? args.mssqlReceiveString : undefined;
            resourceInputs["mssqlRow"] = args ? args.mssqlRow : undefined;
            resourceInputs["mssqlSendString"] = args ? args.mssqlSendString : undefined;
            resourceInputs["mysqlServerType"] = args ? args.mysqlServerType : undefined;
            resourceInputs["nasIp"] = args ? args.nasIp : undefined;
            resourceInputs["oid"] = args ? args.oid : undefined;
            resourceInputs["oracleReceiveString"] = args ? args.oracleReceiveString : undefined;
            resourceInputs["oracleSendString"] = args ? args.oracleSendString : undefined;
            resourceInputs["originHost"] = args ? args.originHost : undefined;
            resourceInputs["originRealm"] = args ? args.originRealm : undefined;
            resourceInputs["passive"] = args ? args.passive : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["productName"] = args ? args.productName : undefined;
            resourceInputs["pwdType"] = args ? args.pwdType : undefined;
            resourceInputs["radiusReject"] = args ? args.radiusReject : undefined;
            resourceInputs["receiveString"] = args ? args.receiveString : undefined;
            resourceInputs["remoteHost"] = args ? args.remoteHost : undefined;
            resourceInputs["remotePassword"] = args ? args.remotePassword : undefined;
            resourceInputs["remotePort"] = args ? args.remotePort : undefined;
            resourceInputs["remoteUsername"] = args ? args.remoteUsername : undefined;
            resourceInputs["row"] = args ? args.row : undefined;
            resourceInputs["rtspDescribeUrl"] = args ? args.rtspDescribeUrl : undefined;
            resourceInputs["rtspMethodType"] = args ? args.rtspMethodType : undefined;
            resourceInputs["script"] = args ? args.script : undefined;
            resourceInputs["secretKey"] = args ? args.secretKey : undefined;
            resourceInputs["sendString"] = args ? args.sendString : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["sid"] = args ? args.sid : undefined;
            resourceInputs["sipRequestType"] = args ? args.sipRequestType : undefined;
            resourceInputs["sslCiphers"] = args ? args.sslCiphers : undefined;
            resourceInputs["statusCode"] = args ? args.statusCode : undefined;
            resourceInputs["stringValue"] = args ? args.stringValue : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["upRetry"] = args ? args.upRetry : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["valueType"] = args ? args.valueType : undefined;
            resourceInputs["vdom"] = args ? args.vdom : undefined;
            resourceInputs["vendorId"] = args ? args.vendorId : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemHealthCheck.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemHealthCheck resources.
 */
export interface SystemHealthCheckState {
    acctAppid?: pulumi.Input<string>;
    addrType?: pulumi.Input<string>;
    agentType?: pulumi.Input<string>;
    allowSslVersion?: pulumi.Input<string>;
    attribute?: pulumi.Input<string>;
    authAppid?: pulumi.Input<string>;
    basedn?: pulumi.Input<string>;
    binddn?: pulumi.Input<string>;
    column?: pulumi.Input<string>;
    community?: pulumi.Input<string>;
    compareType?: pulumi.Input<string>;
    connectString?: pulumi.Input<string>;
    connectType?: pulumi.Input<string>;
    counterValue?: pulumi.Input<string>;
    cpu?: pulumi.Input<string>;
    cpuWeight?: pulumi.Input<string>;
    database?: pulumi.Input<string>;
    destAddr?: pulumi.Input<string>;
    destAddr6?: pulumi.Input<string>;
    destAddrType?: pulumi.Input<string>;
    disk?: pulumi.Input<string>;
    diskWeight?: pulumi.Input<string>;
    domainName?: pulumi.Input<string>;
    downRetry?: pulumi.Input<string>;
    file?: pulumi.Input<string>;
    filter?: pulumi.Input<string>;
    folder?: pulumi.Input<string>;
    hostAddr?: pulumi.Input<string>;
    hostAddr6?: pulumi.Input<string>;
    hostIp6Addr?: pulumi.Input<string>;
    hostIpAddr?: pulumi.Input<string>;
    hostname?: pulumi.Input<string>;
    httpConnect?: pulumi.Input<string>;
    httpExtraString?: pulumi.Input<string>;
    httpVersion?: pulumi.Input<string>;
    interval?: pulumi.Input<string>;
    localCert?: pulumi.Input<string>;
    matchType?: pulumi.Input<string>;
    mem?: pulumi.Input<string>;
    memWeight?: pulumi.Input<string>;
    methodType?: pulumi.Input<string>;
    mkey?: pulumi.Input<string>;
    mssqlColumn?: pulumi.Input<string>;
    mssqlReceiveString?: pulumi.Input<string>;
    mssqlRow?: pulumi.Input<string>;
    mssqlSendString?: pulumi.Input<string>;
    mysqlServerType?: pulumi.Input<string>;
    nasIp?: pulumi.Input<string>;
    oid?: pulumi.Input<string>;
    oracleReceiveString?: pulumi.Input<string>;
    oracleSendString?: pulumi.Input<string>;
    originHost?: pulumi.Input<string>;
    originRealm?: pulumi.Input<string>;
    passive?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    port?: pulumi.Input<string>;
    productName?: pulumi.Input<string>;
    pwdType?: pulumi.Input<string>;
    radiusReject?: pulumi.Input<string>;
    receiveString?: pulumi.Input<string>;
    remoteHost?: pulumi.Input<string>;
    remotePassword?: pulumi.Input<string>;
    remotePort?: pulumi.Input<string>;
    remoteUsername?: pulumi.Input<string>;
    row?: pulumi.Input<string>;
    rtspDescribeUrl?: pulumi.Input<string>;
    rtspMethodType?: pulumi.Input<string>;
    script?: pulumi.Input<string>;
    secretKey?: pulumi.Input<string>;
    sendString?: pulumi.Input<string>;
    serviceName?: pulumi.Input<string>;
    sid?: pulumi.Input<string>;
    sipRequestType?: pulumi.Input<string>;
    sslCiphers?: pulumi.Input<string>;
    statusCode?: pulumi.Input<string>;
    stringValue?: pulumi.Input<string>;
    timeout?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    upRetry?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
    valueType?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
    vendorId?: pulumi.Input<string>;
    version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemHealthCheck resource.
 */
export interface SystemHealthCheckArgs {
    acctAppid?: pulumi.Input<string>;
    addrType?: pulumi.Input<string>;
    agentType?: pulumi.Input<string>;
    allowSslVersion?: pulumi.Input<string>;
    attribute?: pulumi.Input<string>;
    authAppid?: pulumi.Input<string>;
    basedn?: pulumi.Input<string>;
    binddn?: pulumi.Input<string>;
    column?: pulumi.Input<string>;
    community?: pulumi.Input<string>;
    compareType?: pulumi.Input<string>;
    connectString?: pulumi.Input<string>;
    connectType?: pulumi.Input<string>;
    counterValue?: pulumi.Input<string>;
    cpu?: pulumi.Input<string>;
    cpuWeight?: pulumi.Input<string>;
    database?: pulumi.Input<string>;
    destAddr?: pulumi.Input<string>;
    destAddr6?: pulumi.Input<string>;
    destAddrType?: pulumi.Input<string>;
    disk?: pulumi.Input<string>;
    diskWeight?: pulumi.Input<string>;
    domainName?: pulumi.Input<string>;
    downRetry?: pulumi.Input<string>;
    file?: pulumi.Input<string>;
    filter?: pulumi.Input<string>;
    folder?: pulumi.Input<string>;
    hostAddr?: pulumi.Input<string>;
    hostAddr6?: pulumi.Input<string>;
    hostIp6Addr?: pulumi.Input<string>;
    hostIpAddr?: pulumi.Input<string>;
    hostname?: pulumi.Input<string>;
    httpConnect?: pulumi.Input<string>;
    httpExtraString?: pulumi.Input<string>;
    httpVersion?: pulumi.Input<string>;
    interval?: pulumi.Input<string>;
    localCert?: pulumi.Input<string>;
    matchType?: pulumi.Input<string>;
    mem?: pulumi.Input<string>;
    memWeight?: pulumi.Input<string>;
    methodType?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    mssqlColumn?: pulumi.Input<string>;
    mssqlReceiveString?: pulumi.Input<string>;
    mssqlRow?: pulumi.Input<string>;
    mssqlSendString?: pulumi.Input<string>;
    mysqlServerType?: pulumi.Input<string>;
    nasIp?: pulumi.Input<string>;
    oid?: pulumi.Input<string>;
    oracleReceiveString?: pulumi.Input<string>;
    oracleSendString?: pulumi.Input<string>;
    originHost?: pulumi.Input<string>;
    originRealm?: pulumi.Input<string>;
    passive?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    port?: pulumi.Input<string>;
    productName?: pulumi.Input<string>;
    pwdType?: pulumi.Input<string>;
    radiusReject?: pulumi.Input<string>;
    receiveString?: pulumi.Input<string>;
    remoteHost?: pulumi.Input<string>;
    remotePassword?: pulumi.Input<string>;
    remotePort?: pulumi.Input<string>;
    remoteUsername?: pulumi.Input<string>;
    row?: pulumi.Input<string>;
    rtspDescribeUrl?: pulumi.Input<string>;
    rtspMethodType?: pulumi.Input<string>;
    script?: pulumi.Input<string>;
    secretKey?: pulumi.Input<string>;
    sendString?: pulumi.Input<string>;
    serviceName?: pulumi.Input<string>;
    sid?: pulumi.Input<string>;
    sipRequestType?: pulumi.Input<string>;
    sslCiphers?: pulumi.Input<string>;
    statusCode?: pulumi.Input<string>;
    stringValue?: pulumi.Input<string>;
    timeout?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    upRetry?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
    valueType?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
    vendorId?: pulumi.Input<string>;
    version?: pulumi.Input<string>;
}
