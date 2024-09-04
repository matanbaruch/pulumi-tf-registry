// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface AuditsyslogpolicyGlobalbinding {
    feature?: pulumi.Input<string>;
    globalbindtype?: pulumi.Input<string>;
    gotopriorityexpression?: pulumi.Input<string>;
    nextfactor?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
}

export interface ClusterClusternode {
    addsnip?: pulumi.Input<boolean>;
    backplane?: pulumi.Input<string>;
    clearnodegroupconfig?: pulumi.Input<string>;
    delay?: pulumi.Input<number>;
    endpoint: pulumi.Input<string>;
    /**
     * Ignore validity of endpoint TLS certificate if true
     */
    insecureSkipVerify?: pulumi.Input<boolean>;
    ipaddress: pulumi.Input<string>;
    nodegroup?: pulumi.Input<string>;
    nodeid: pulumi.Input<number>;
    password?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    snipIpaddress?: pulumi.Input<string>;
    snipNetmask?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    tunnelmode?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
    vtyshEnable?: pulumi.Input<boolean>;
    vtyshes?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ClusterClusternodegroup {
    name?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    state?: pulumi.Input<string>;
    sticky?: pulumi.Input<string>;
    strict?: pulumi.Input<string>;
}

export interface CsvserverSslpolicybinding {
    gotopriorityexpression?: pulumi.Input<string>;
    invoke?: pulumi.Input<boolean>;
    labelname?: pulumi.Input<string>;
    labeltype?: pulumi.Input<string>;
    policyname?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    type?: pulumi.Input<string>;
}

export interface GetNitroInfoNitroList {
    object?: {[key: string]: string};
}

export interface GetNitroInfoNitroListArgs {
    object?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

export interface GslbserviceLbmonitorbinding {
    monitorName?: pulumi.Input<string>;
    monstate?: pulumi.Input<string>;
    weight?: pulumi.Input<number>;
}

export interface GslbvserverDomain {
    backupip?: pulumi.Input<string>;
    backupipflag?: pulumi.Input<boolean>;
    cookiedomain?: pulumi.Input<string>;
    cookiedomainflag?: pulumi.Input<boolean>;
    cookietimeout?: pulumi.Input<number>;
    domainname?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    sitedomainttl?: pulumi.Input<number>;
    ttl?: pulumi.Input<number>;
}

export interface GslbvserverService {
    domainname?: pulumi.Input<string>;
    servicename: pulumi.Input<string>;
    weight?: pulumi.Input<number>;
}

export interface LbvserverSslpolicybinding {
    gotopriorityexpression?: pulumi.Input<string>;
    invoke?: pulumi.Input<boolean>;
    labelname?: pulumi.Input<string>;
    labeltype?: pulumi.Input<string>;
    policyname?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    type?: pulumi.Input<string>;
}

export interface NsaclsAcl {
    aclaction?: pulumi.Input<string>;
    aclname: pulumi.Input<string>;
    destipop?: pulumi.Input<string>;
    destipval?: pulumi.Input<string>;
    destportop?: pulumi.Input<string>;
    destportval?: pulumi.Input<string>;
    established?: pulumi.Input<boolean>;
    icmpcode?: pulumi.Input<number>;
    icmptype?: pulumi.Input<number>;
    interface?: pulumi.Input<string>;
    logstate?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    protocol?: pulumi.Input<string>;
    protocolnumber?: pulumi.Input<number>;
    ratelimit?: pulumi.Input<number>;
    srcipop?: pulumi.Input<string>;
    srcipval?: pulumi.Input<string>;
    srcmac?: pulumi.Input<string>;
    srcportop?: pulumi.Input<string>;
    srcportval?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    td?: pulumi.Input<number>;
    ttl?: pulumi.Input<number>;
    vlan?: pulumi.Input<number>;
}

export interface NslicenseTimeouts {
    create?: pulumi.Input<string>;
    delete?: pulumi.Input<string>;
    update?: pulumi.Input<string>;
}

export interface ResponderpolicyCsvserverbinding {
    bindpoint?: pulumi.Input<string>;
    gotopriorityexpression?: pulumi.Input<string>;
    invoke?: pulumi.Input<boolean>;
    labelname?: pulumi.Input<string>;
    labeltype?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    policyname?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    targetlbvserver?: pulumi.Input<string>;
}

export interface ResponderpolicyGlobalbinding {
    gotopriorityexpression?: pulumi.Input<string>;
    invoke?: pulumi.Input<boolean>;
    labelname?: pulumi.Input<string>;
    labeltype?: pulumi.Input<string>;
    policyname?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    type?: pulumi.Input<string>;
}

export interface ResponderpolicyLbvserverbinding {
    bindpoint?: pulumi.Input<string>;
    gotopriorityexpression?: pulumi.Input<string>;
    invoke?: pulumi.Input<boolean>;
    labelname?: pulumi.Input<string>;
    labeltype?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
}

export interface RewritepolicyCsvserverbinding {
    bindpoint?: pulumi.Input<string>;
    gotopriorityexpression?: pulumi.Input<string>;
    invoke?: pulumi.Input<boolean>;
    labelname?: pulumi.Input<string>;
    labeltype?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    targetlbvserver?: pulumi.Input<string>;
}

export interface RewritepolicyGlobalbinding {
    globalbindtype?: pulumi.Input<string>;
    gotopriorityexpression?: pulumi.Input<string>;
    invoke?: pulumi.Input<boolean>;
    labelname?: pulumi.Input<string>;
    labeltype?: pulumi.Input<string>;
    policyname?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    type?: pulumi.Input<string>;
}

export interface RewritepolicyLbvserverbinding {
    bindpoint?: pulumi.Input<string>;
    gotopriorityexpression?: pulumi.Input<string>;
    invoke?: pulumi.Input<boolean>;
    labelname?: pulumi.Input<string>;
    labeltype?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
}

export interface RnatClearRnat {
    aclname?: pulumi.Input<string>;
    natip?: pulumi.Input<string>;
    natip2?: pulumi.Input<string>;
    netmask?: pulumi.Input<string>;
    network?: pulumi.Input<string>;
    redirectport?: pulumi.Input<boolean>;
    td?: pulumi.Input<number>;
}

export interface SslcipherCiphersuitebinding {
    ciphername: pulumi.Input<string>;
    cipherpriority?: pulumi.Input<number>;
}

export interface SslprofileCipherbinding {
    ciphername?: pulumi.Input<string>;
    cipherpriority?: pulumi.Input<number>;
}

export interface SystemgroupCmdpolicybinding {
    policyname?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
}

export interface SystemuserCmdpolicybinding {
    policyname?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
}
