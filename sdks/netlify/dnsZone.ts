// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DnsZone extends pulumi.CustomResource {
    /**
     * Get an existing DnsZone resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DnsZoneState, opts?: pulumi.CustomResourceOptions): DnsZone {
        return new DnsZone(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'netlify:index/dnsZone:DnsZone';

    /**
     * Returns true if the given object is an instance of DnsZone.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DnsZone {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DnsZone.__pulumiType;
    }

    public /*out*/ readonly dnsServers!: pulumi.Output<string[]>;
    public /*out*/ readonly domain!: pulumi.Output<outputs.DnsZoneDomain>;
    public /*out*/ readonly lastUpdated!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly teamId!: pulumi.Output<string>;
    /**
     * Required if a default team was not configured in the provider configuration.
     */
    public readonly teamSlug!: pulumi.Output<string>;

    /**
     * Create a DnsZone resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DnsZoneArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DnsZoneArgs | DnsZoneState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DnsZoneState | undefined;
            resourceInputs["dnsServers"] = state ? state.dnsServers : undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["lastUpdated"] = state ? state.lastUpdated : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["teamId"] = state ? state.teamId : undefined;
            resourceInputs["teamSlug"] = state ? state.teamSlug : undefined;
        } else {
            const args = argsOrState as DnsZoneArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["teamSlug"] = args ? args.teamSlug : undefined;
            resourceInputs["dnsServers"] = undefined /*out*/;
            resourceInputs["domain"] = undefined /*out*/;
            resourceInputs["lastUpdated"] = undefined /*out*/;
            resourceInputs["teamId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DnsZone.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DnsZone resources.
 */
export interface DnsZoneState {
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    domain?: pulumi.Input<inputs.DnsZoneDomain>;
    lastUpdated?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    teamId?: pulumi.Input<string>;
    /**
     * Required if a default team was not configured in the provider configuration.
     */
    teamSlug?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DnsZone resource.
 */
export interface DnsZoneArgs {
    name?: pulumi.Input<string>;
    /**
     * Required if a default team was not configured in the provider configuration.
     */
    teamSlug?: pulumi.Input<string>;
}
