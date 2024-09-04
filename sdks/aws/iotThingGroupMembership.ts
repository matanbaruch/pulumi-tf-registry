// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IotThingGroupMembership extends pulumi.CustomResource {
    /**
     * Get an existing IotThingGroupMembership resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IotThingGroupMembershipState, opts?: pulumi.CustomResourceOptions): IotThingGroupMembership {
        return new IotThingGroupMembership(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/iotThingGroupMembership:IotThingGroupMembership';

    /**
     * Returns true if the given object is an instance of IotThingGroupMembership.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IotThingGroupMembership {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IotThingGroupMembership.__pulumiType;
    }

    public readonly overrideDynamicGroup!: pulumi.Output<boolean | undefined>;
    public readonly thingGroupName!: pulumi.Output<string>;
    public readonly thingName!: pulumi.Output<string>;

    /**
     * Create a IotThingGroupMembership resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotThingGroupMembershipArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IotThingGroupMembershipArgs | IotThingGroupMembershipState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IotThingGroupMembershipState | undefined;
            resourceInputs["overrideDynamicGroup"] = state ? state.overrideDynamicGroup : undefined;
            resourceInputs["thingGroupName"] = state ? state.thingGroupName : undefined;
            resourceInputs["thingName"] = state ? state.thingName : undefined;
        } else {
            const args = argsOrState as IotThingGroupMembershipArgs | undefined;
            if ((!args || args.thingGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'thingGroupName'");
            }
            if ((!args || args.thingName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'thingName'");
            }
            resourceInputs["overrideDynamicGroup"] = args ? args.overrideDynamicGroup : undefined;
            resourceInputs["thingGroupName"] = args ? args.thingGroupName : undefined;
            resourceInputs["thingName"] = args ? args.thingName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IotThingGroupMembership.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IotThingGroupMembership resources.
 */
export interface IotThingGroupMembershipState {
    overrideDynamicGroup?: pulumi.Input<boolean>;
    thingGroupName?: pulumi.Input<string>;
    thingName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IotThingGroupMembership resource.
 */
export interface IotThingGroupMembershipArgs {
    overrideDynamicGroup?: pulumi.Input<boolean>;
    thingGroupName: pulumi.Input<string>;
    thingName: pulumi.Input<string>;
}
