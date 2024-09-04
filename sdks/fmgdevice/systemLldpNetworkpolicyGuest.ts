// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemLldpNetworkpolicyGuest extends pulumi.CustomResource {
    /**
     * Get an existing SystemLldpNetworkpolicyGuest resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemLldpNetworkpolicyGuestState, opts?: pulumi.CustomResourceOptions): SystemLldpNetworkpolicyGuest {
        return new SystemLldpNetworkpolicyGuest(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/systemLldpNetworkpolicyGuest:SystemLldpNetworkpolicyGuest';

    /**
     * Returns true if the given object is an instance of SystemLldpNetworkpolicyGuest.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemLldpNetworkpolicyGuest {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemLldpNetworkpolicyGuest.__pulumiType;
    }

    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly dscp!: pulumi.Output<number | undefined>;
    public readonly networkPolicy!: pulumi.Output<string>;
    public readonly priority!: pulumi.Output<number>;
    public readonly status!: pulumi.Output<string>;
    public readonly tag!: pulumi.Output<string>;
    public readonly vlan!: pulumi.Output<number | undefined>;

    /**
     * Create a SystemLldpNetworkpolicyGuest resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemLldpNetworkpolicyGuestArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemLldpNetworkpolicyGuestArgs | SystemLldpNetworkpolicyGuestState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemLldpNetworkpolicyGuestState | undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["dscp"] = state ? state.dscp : undefined;
            resourceInputs["networkPolicy"] = state ? state.networkPolicy : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tag"] = state ? state.tag : undefined;
            resourceInputs["vlan"] = state ? state.vlan : undefined;
        } else {
            const args = argsOrState as SystemLldpNetworkpolicyGuestArgs | undefined;
            if ((!args || args.networkPolicy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkPolicy'");
            }
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["dscp"] = args ? args.dscp : undefined;
            resourceInputs["networkPolicy"] = args ? args.networkPolicy : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["tag"] = args ? args.tag : undefined;
            resourceInputs["vlan"] = args ? args.vlan : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemLldpNetworkpolicyGuest.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemLldpNetworkpolicyGuest resources.
 */
export interface SystemLldpNetworkpolicyGuestState {
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    dscp?: pulumi.Input<number>;
    networkPolicy?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    status?: pulumi.Input<string>;
    tag?: pulumi.Input<string>;
    vlan?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a SystemLldpNetworkpolicyGuest resource.
 */
export interface SystemLldpNetworkpolicyGuestArgs {
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    dscp?: pulumi.Input<number>;
    networkPolicy: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    status?: pulumi.Input<string>;
    tag?: pulumi.Input<string>;
    vlan?: pulumi.Input<number>;
}
