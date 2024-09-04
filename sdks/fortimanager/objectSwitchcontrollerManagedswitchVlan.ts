// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectSwitchcontrollerManagedswitchVlan extends pulumi.CustomResource {
    /**
     * Get an existing ObjectSwitchcontrollerManagedswitchVlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectSwitchcontrollerManagedswitchVlanState, opts?: pulumi.CustomResourceOptions): ObjectSwitchcontrollerManagedswitchVlan {
        return new ObjectSwitchcontrollerManagedswitchVlan(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectSwitchcontrollerManagedswitchVlan:ObjectSwitchcontrollerManagedswitchVlan';

    /**
     * Returns true if the given object is an instance of ObjectSwitchcontrollerManagedswitchVlan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectSwitchcontrollerManagedswitchVlan {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectSwitchcontrollerManagedswitchVlan.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly assignmentPriority!: pulumi.Output<number | undefined>;
    public readonly managedSwitch!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly vlanName!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectSwitchcontrollerManagedswitchVlan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectSwitchcontrollerManagedswitchVlanArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectSwitchcontrollerManagedswitchVlanArgs | ObjectSwitchcontrollerManagedswitchVlanState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectSwitchcontrollerManagedswitchVlanState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["assignmentPriority"] = state ? state.assignmentPriority : undefined;
            resourceInputs["managedSwitch"] = state ? state.managedSwitch : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["vlanName"] = state ? state.vlanName : undefined;
        } else {
            const args = argsOrState as ObjectSwitchcontrollerManagedswitchVlanArgs | undefined;
            if ((!args || args.managedSwitch === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managedSwitch'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["assignmentPriority"] = args ? args.assignmentPriority : undefined;
            resourceInputs["managedSwitch"] = args ? args.managedSwitch : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["vlanName"] = args ? args.vlanName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectSwitchcontrollerManagedswitchVlan.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectSwitchcontrollerManagedswitchVlan resources.
 */
export interface ObjectSwitchcontrollerManagedswitchVlanState {
    adom?: pulumi.Input<string>;
    assignmentPriority?: pulumi.Input<number>;
    managedSwitch?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    vlanName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectSwitchcontrollerManagedswitchVlan resource.
 */
export interface ObjectSwitchcontrollerManagedswitchVlanArgs {
    adom?: pulumi.Input<string>;
    assignmentPriority?: pulumi.Input<number>;
    managedSwitch: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    vlanName?: pulumi.Input<string>;
}
