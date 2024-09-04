// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemVdomdns extends pulumi.CustomResource {
    /**
     * Get an existing SystemVdomdns resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemVdomdnsState, opts?: pulumi.CustomResourceOptions): SystemVdomdns {
        return new SystemVdomdns(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/systemVdomdns:SystemVdomdns';

    /**
     * Returns true if the given object is an instance of SystemVdomdns.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemVdomdns {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemVdomdns.__pulumiType;
    }

    public readonly altPrimary!: pulumi.Output<string>;
    public readonly altSecondary!: pulumi.Output<string>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly dnsOverTls!: pulumi.Output<string | undefined>;
    public readonly interfaceSelectMethod!: pulumi.Output<string>;
    public readonly interfaces!: pulumi.Output<string[]>;
    public readonly ip6Primary!: pulumi.Output<string>;
    public readonly ip6Secondary!: pulumi.Output<string>;
    public readonly primary!: pulumi.Output<string>;
    public readonly protocols!: pulumi.Output<string[]>;
    public readonly secondary!: pulumi.Output<string>;
    public readonly serverHostnames!: pulumi.Output<string[]>;
    public readonly serverSelectMethod!: pulumi.Output<string>;
    public readonly sourceIp!: pulumi.Output<string>;
    public readonly sslCertificates!: pulumi.Output<string[]>;
    public readonly vdomDns!: pulumi.Output<string>;

    /**
     * Create a SystemVdomdns resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemVdomdnsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemVdomdnsArgs | SystemVdomdnsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemVdomdnsState | undefined;
            resourceInputs["altPrimary"] = state ? state.altPrimary : undefined;
            resourceInputs["altSecondary"] = state ? state.altSecondary : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["dnsOverTls"] = state ? state.dnsOverTls : undefined;
            resourceInputs["interfaceSelectMethod"] = state ? state.interfaceSelectMethod : undefined;
            resourceInputs["interfaces"] = state ? state.interfaces : undefined;
            resourceInputs["ip6Primary"] = state ? state.ip6Primary : undefined;
            resourceInputs["ip6Secondary"] = state ? state.ip6Secondary : undefined;
            resourceInputs["primary"] = state ? state.primary : undefined;
            resourceInputs["protocols"] = state ? state.protocols : undefined;
            resourceInputs["secondary"] = state ? state.secondary : undefined;
            resourceInputs["serverHostnames"] = state ? state.serverHostnames : undefined;
            resourceInputs["serverSelectMethod"] = state ? state.serverSelectMethod : undefined;
            resourceInputs["sourceIp"] = state ? state.sourceIp : undefined;
            resourceInputs["sslCertificates"] = state ? state.sslCertificates : undefined;
            resourceInputs["vdomDns"] = state ? state.vdomDns : undefined;
        } else {
            const args = argsOrState as SystemVdomdnsArgs | undefined;
            resourceInputs["altPrimary"] = args ? args.altPrimary : undefined;
            resourceInputs["altSecondary"] = args ? args.altSecondary : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["dnsOverTls"] = args ? args.dnsOverTls : undefined;
            resourceInputs["interfaceSelectMethod"] = args ? args.interfaceSelectMethod : undefined;
            resourceInputs["interfaces"] = args ? args.interfaces : undefined;
            resourceInputs["ip6Primary"] = args ? args.ip6Primary : undefined;
            resourceInputs["ip6Secondary"] = args ? args.ip6Secondary : undefined;
            resourceInputs["primary"] = args ? args.primary : undefined;
            resourceInputs["protocols"] = args ? args.protocols : undefined;
            resourceInputs["secondary"] = args ? args.secondary : undefined;
            resourceInputs["serverHostnames"] = args ? args.serverHostnames : undefined;
            resourceInputs["serverSelectMethod"] = args ? args.serverSelectMethod : undefined;
            resourceInputs["sourceIp"] = args ? args.sourceIp : undefined;
            resourceInputs["sslCertificates"] = args ? args.sslCertificates : undefined;
            resourceInputs["vdomDns"] = args ? args.vdomDns : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemVdomdns.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemVdomdns resources.
 */
export interface SystemVdomdnsState {
    altPrimary?: pulumi.Input<string>;
    altSecondary?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    dnsOverTls?: pulumi.Input<string>;
    interfaceSelectMethod?: pulumi.Input<string>;
    interfaces?: pulumi.Input<pulumi.Input<string>[]>;
    ip6Primary?: pulumi.Input<string>;
    ip6Secondary?: pulumi.Input<string>;
    primary?: pulumi.Input<string>;
    protocols?: pulumi.Input<pulumi.Input<string>[]>;
    secondary?: pulumi.Input<string>;
    serverHostnames?: pulumi.Input<pulumi.Input<string>[]>;
    serverSelectMethod?: pulumi.Input<string>;
    sourceIp?: pulumi.Input<string>;
    sslCertificates?: pulumi.Input<pulumi.Input<string>[]>;
    vdomDns?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemVdomdns resource.
 */
export interface SystemVdomdnsArgs {
    altPrimary?: pulumi.Input<string>;
    altSecondary?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    dnsOverTls?: pulumi.Input<string>;
    interfaceSelectMethod?: pulumi.Input<string>;
    interfaces?: pulumi.Input<pulumi.Input<string>[]>;
    ip6Primary?: pulumi.Input<string>;
    ip6Secondary?: pulumi.Input<string>;
    primary?: pulumi.Input<string>;
    protocols?: pulumi.Input<pulumi.Input<string>[]>;
    secondary?: pulumi.Input<string>;
    serverHostnames?: pulumi.Input<pulumi.Input<string>[]>;
    serverSelectMethod?: pulumi.Input<string>;
    sourceIp?: pulumi.Input<string>;
    sslCertificates?: pulumi.Input<pulumi.Input<string>[]>;
    vdomDns?: pulumi.Input<string>;
}
