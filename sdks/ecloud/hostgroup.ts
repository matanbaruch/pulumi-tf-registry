// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Hostgroup extends pulumi.CustomResource {
    /**
     * Get an existing Hostgroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HostgroupState, opts?: pulumi.CustomResourceOptions): Hostgroup {
        return new Hostgroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ecloud:index/hostgroup:Hostgroup';

    /**
     * Returns true if the given object is an instance of Hostgroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Hostgroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Hostgroup.__pulumiType;
    }

    public readonly availabilityZoneId!: pulumi.Output<string>;
    public readonly hostSpecId!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly vpcId!: pulumi.Output<string>;
    public readonly windowsEnabled!: pulumi.Output<boolean>;

    /**
     * Create a Hostgroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HostgroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HostgroupArgs | HostgroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as HostgroupState | undefined;
            resourceInputs["availabilityZoneId"] = state ? state.availabilityZoneId : undefined;
            resourceInputs["hostSpecId"] = state ? state.hostSpecId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
            resourceInputs["windowsEnabled"] = state ? state.windowsEnabled : undefined;
        } else {
            const args = argsOrState as HostgroupArgs | undefined;
            if ((!args || args.availabilityZoneId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'availabilityZoneId'");
            }
            if ((!args || args.hostSpecId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostSpecId'");
            }
            if ((!args || args.vpcId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpcId'");
            }
            if ((!args || args.windowsEnabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'windowsEnabled'");
            }
            resourceInputs["availabilityZoneId"] = args ? args.availabilityZoneId : undefined;
            resourceInputs["hostSpecId"] = args ? args.hostSpecId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
            resourceInputs["windowsEnabled"] = args ? args.windowsEnabled : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Hostgroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Hostgroup resources.
 */
export interface HostgroupState {
    availabilityZoneId?: pulumi.Input<string>;
    hostSpecId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    vpcId?: pulumi.Input<string>;
    windowsEnabled?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a Hostgroup resource.
 */
export interface HostgroupArgs {
    availabilityZoneId: pulumi.Input<string>;
    hostSpecId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    vpcId: pulumi.Input<string>;
    windowsEnabled: pulumi.Input<boolean>;
}
