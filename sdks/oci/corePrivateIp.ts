// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CorePrivateIp extends pulumi.CustomResource {
    /**
     * Get an existing CorePrivateIp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CorePrivateIpState, opts?: pulumi.CustomResourceOptions): CorePrivateIp {
        return new CorePrivateIp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/corePrivateIp:CorePrivateIp';

    /**
     * Returns true if the given object is an instance of CorePrivateIp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CorePrivateIp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CorePrivateIp.__pulumiType;
    }

    public /*out*/ readonly availabilityDomain!: pulumi.Output<string>;
    public /*out*/ readonly compartmentId!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public readonly hostnameLabel!: pulumi.Output<string>;
    public readonly ipAddress!: pulumi.Output<string>;
    public /*out*/ readonly isPrimary!: pulumi.Output<boolean>;
    public /*out*/ readonly isReserved!: pulumi.Output<boolean>;
    public /*out*/ readonly subnetId!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.CorePrivateIpTimeouts | undefined>;
    public readonly vlanId!: pulumi.Output<string>;
    public readonly vnicId!: pulumi.Output<string>;

    /**
     * Create a CorePrivateIp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CorePrivateIpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CorePrivateIpArgs | CorePrivateIpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CorePrivateIpState | undefined;
            resourceInputs["availabilityDomain"] = state ? state.availabilityDomain : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["hostnameLabel"] = state ? state.hostnameLabel : undefined;
            resourceInputs["ipAddress"] = state ? state.ipAddress : undefined;
            resourceInputs["isPrimary"] = state ? state.isPrimary : undefined;
            resourceInputs["isReserved"] = state ? state.isReserved : undefined;
            resourceInputs["subnetId"] = state ? state.subnetId : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vlanId"] = state ? state.vlanId : undefined;
            resourceInputs["vnicId"] = state ? state.vnicId : undefined;
        } else {
            const args = argsOrState as CorePrivateIpArgs | undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["hostnameLabel"] = args ? args.hostnameLabel : undefined;
            resourceInputs["ipAddress"] = args ? args.ipAddress : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vlanId"] = args ? args.vlanId : undefined;
            resourceInputs["vnicId"] = args ? args.vnicId : undefined;
            resourceInputs["availabilityDomain"] = undefined /*out*/;
            resourceInputs["compartmentId"] = undefined /*out*/;
            resourceInputs["isPrimary"] = undefined /*out*/;
            resourceInputs["isReserved"] = undefined /*out*/;
            resourceInputs["subnetId"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CorePrivateIp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CorePrivateIp resources.
 */
export interface CorePrivateIpState {
    availabilityDomain?: pulumi.Input<string>;
    compartmentId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    hostnameLabel?: pulumi.Input<string>;
    ipAddress?: pulumi.Input<string>;
    isPrimary?: pulumi.Input<boolean>;
    isReserved?: pulumi.Input<boolean>;
    subnetId?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CorePrivateIpTimeouts>;
    vlanId?: pulumi.Input<string>;
    vnicId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CorePrivateIp resource.
 */
export interface CorePrivateIpArgs {
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    hostnameLabel?: pulumi.Input<string>;
    ipAddress?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CorePrivateIpTimeouts>;
    vlanId?: pulumi.Input<string>;
    vnicId?: pulumi.Input<string>;
}
