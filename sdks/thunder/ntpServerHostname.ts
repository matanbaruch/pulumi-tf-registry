// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class NtpServerHostname extends pulumi.CustomResource {
    /**
     * Get an existing NtpServerHostname resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NtpServerHostnameState, opts?: pulumi.CustomResourceOptions): NtpServerHostname {
        return new NtpServerHostname(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/ntpServerHostname:NtpServerHostname';

    /**
     * Returns true if the given object is an instance of NtpServerHostname.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NtpServerHostname {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NtpServerHostname.__pulumiType;
    }

    /**
     * 'enable': Enable this NTP server; 'disable': Disable this NTP server;
     */
    public readonly action!: pulumi.Output<string | undefined>;
    /**
     * IPV4 address, IPV6 address or host name of NTP server(string1~63)
     */
    public readonly hostServername!: pulumi.Output<string>;
    /**
     * Use trusted key to authenticate this NTP server (The trusted key number to use)
     */
    public readonly key!: pulumi.Output<number | undefined>;
    /**
     * Set this NTP server as preferred
     */
    public readonly prefer!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a NtpServerHostname resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NtpServerHostnameArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NtpServerHostnameArgs | NtpServerHostnameState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NtpServerHostnameState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["hostServername"] = state ? state.hostServername : undefined;
            resourceInputs["key"] = state ? state.key : undefined;
            resourceInputs["prefer"] = state ? state.prefer : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as NtpServerHostnameArgs | undefined;
            if ((!args || args.hostServername === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostServername'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["hostServername"] = args ? args.hostServername : undefined;
            resourceInputs["key"] = args ? args.key : undefined;
            resourceInputs["prefer"] = args ? args.prefer : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NtpServerHostname.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NtpServerHostname resources.
 */
export interface NtpServerHostnameState {
    /**
     * 'enable': Enable this NTP server; 'disable': Disable this NTP server;
     */
    action?: pulumi.Input<string>;
    /**
     * IPV4 address, IPV6 address or host name of NTP server(string1~63)
     */
    hostServername?: pulumi.Input<string>;
    /**
     * Use trusted key to authenticate this NTP server (The trusted key number to use)
     */
    key?: pulumi.Input<number>;
    /**
     * Set this NTP server as preferred
     */
    prefer?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NtpServerHostname resource.
 */
export interface NtpServerHostnameArgs {
    /**
     * 'enable': Enable this NTP server; 'disable': Disable this NTP server;
     */
    action?: pulumi.Input<string>;
    /**
     * IPV4 address, IPV6 address or host name of NTP server(string1~63)
     */
    hostServername: pulumi.Input<string>;
    /**
     * Use trusted key to authenticate this NTP server (The trusted key number to use)
     */
    key?: pulumi.Input<number>;
    /**
     * Set this NTP server as preferred
     */
    prefer?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
