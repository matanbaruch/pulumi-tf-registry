// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface DomainDnssecDnssec {
    /**
     * The algorithm type that is used, see: https://www.transip.nl/vragen/461-domeinnaam-nameservers-gebruikt-beveiligen-dnssec/ for the possible options.
     */
    algorithm: pulumi.Input<number>;
    /**
     * The signing key number, either 256 (Zone Signing Key) or 257 (Key Signing Key)
     */
    flags: pulumi.Input<number>;
    /**
     * A 5-digit key of the Zonesigner
     */
    keyTag: pulumi.Input<number>;
    /**
     * The public key
     */
    publicKey: pulumi.Input<string>;
}

export interface DomainNameserversNameserver {
    /**
     * The hostname of this nameserver
     */
    hostname: pulumi.Input<string>;
    /**
     * Optional ipv4 glue record for this nameserver
     */
    ipv4?: pulumi.Input<string>;
    /**
     * Optional ipv6 glue record for this nameserver
     */
    ipv6?: pulumi.Input<string>;
}

export interface VpsFirewallInboundRule {
    /**
     * The rule name.
     */
    description: pulumi.Input<string>;
    /**
     * Network port for this rule
     */
    port: pulumi.Input<string>;
    /**
     * The protocol `tcp`, `udp` or `tcp_udp`.
     */
    protocol?: pulumi.Input<string>;
    /**
     * Whitelisted IP's or ranges that are allowed to connect, empty to allow all.
     */
    whitelists?: pulumi.Input<pulumi.Input<string>[]>;
}
