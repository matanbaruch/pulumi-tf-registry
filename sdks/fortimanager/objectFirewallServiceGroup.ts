// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectFirewallServiceGroup extends pulumi.CustomResource {
    /**
     * Get an existing ObjectFirewallServiceGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectFirewallServiceGroupState, opts?: pulumi.CustomResourceOptions): ObjectFirewallServiceGroup {
        return new ObjectFirewallServiceGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectFirewallServiceGroup:ObjectFirewallServiceGroup';

    /**
     * Returns true if the given object is an instance of ObjectFirewallServiceGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectFirewallServiceGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectFirewallServiceGroup.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly color!: pulumi.Output<number | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly fabricObject!: pulumi.Output<string>;
    public readonly globalObject!: pulumi.Output<number | undefined>;
    public readonly members!: pulumi.Output<string[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly proxy!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a ObjectFirewallServiceGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ObjectFirewallServiceGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectFirewallServiceGroupArgs | ObjectFirewallServiceGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectFirewallServiceGroupState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["color"] = state ? state.color : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["fabricObject"] = state ? state.fabricObject : undefined;
            resourceInputs["globalObject"] = state ? state.globalObject : undefined;
            resourceInputs["members"] = state ? state.members : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["proxy"] = state ? state.proxy : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as ObjectFirewallServiceGroupArgs | undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["color"] = args ? args.color : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["fabricObject"] = args ? args.fabricObject : undefined;
            resourceInputs["globalObject"] = args ? args.globalObject : undefined;
            resourceInputs["members"] = args ? args.members : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["proxy"] = args ? args.proxy : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectFirewallServiceGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectFirewallServiceGroup resources.
 */
export interface ObjectFirewallServiceGroupState {
    adom?: pulumi.Input<string>;
    color?: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    fabricObject?: pulumi.Input<string>;
    globalObject?: pulumi.Input<number>;
    members?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    proxy?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectFirewallServiceGroup resource.
 */
export interface ObjectFirewallServiceGroupArgs {
    adom?: pulumi.Input<string>;
    color?: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    fabricObject?: pulumi.Input<string>;
    globalObject?: pulumi.Input<number>;
    members?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    proxy?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
