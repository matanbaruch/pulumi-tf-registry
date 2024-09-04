// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CoreIpv6 extends pulumi.CustomResource {
    /**
     * Get an existing CoreIpv6 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CoreIpv6State, opts?: pulumi.CustomResourceOptions): CoreIpv6 {
        return new CoreIpv6(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/coreIpv6:CoreIpv6';

    /**
     * Returns true if the given object is an instance of CoreIpv6.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CoreIpv6 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CoreIpv6.__pulumiType;
    }

    public /*out*/ readonly compartmentId!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public readonly ipAddress!: pulumi.Output<string>;
    public readonly ipv6subnetCidr!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly subnetId!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.CoreIpv6Timeouts | undefined>;
    public readonly vnicId!: pulumi.Output<string>;

    /**
     * Create a CoreIpv6 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CoreIpv6Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CoreIpv6Args | CoreIpv6State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CoreIpv6State | undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["ipAddress"] = state ? state.ipAddress : undefined;
            resourceInputs["ipv6subnetCidr"] = state ? state.ipv6subnetCidr : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["subnetId"] = state ? state.subnetId : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vnicId"] = state ? state.vnicId : undefined;
        } else {
            const args = argsOrState as CoreIpv6Args | undefined;
            if ((!args || args.vnicId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vnicId'");
            }
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["ipAddress"] = args ? args.ipAddress : undefined;
            resourceInputs["ipv6subnetCidr"] = args ? args.ipv6subnetCidr : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vnicId"] = args ? args.vnicId : undefined;
            resourceInputs["compartmentId"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["subnetId"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CoreIpv6.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CoreIpv6 resources.
 */
export interface CoreIpv6State {
    compartmentId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    ipAddress?: pulumi.Input<string>;
    ipv6subnetCidr?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    subnetId?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CoreIpv6Timeouts>;
    vnicId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CoreIpv6 resource.
 */
export interface CoreIpv6Args {
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    ipAddress?: pulumi.Input<string>;
    ipv6subnetCidr?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CoreIpv6Timeouts>;
    vnicId: pulumi.Input<string>;
}
