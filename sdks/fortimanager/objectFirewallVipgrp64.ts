// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectFirewallVipgrp64 extends pulumi.CustomResource {
    /**
     * Get an existing ObjectFirewallVipgrp64 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectFirewallVipgrp64State, opts?: pulumi.CustomResourceOptions): ObjectFirewallVipgrp64 {
        return new ObjectFirewallVipgrp64(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectFirewallVipgrp64:ObjectFirewallVipgrp64';

    /**
     * Returns true if the given object is an instance of ObjectFirewallVipgrp64.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectFirewallVipgrp64 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectFirewallVipgrp64.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly color!: pulumi.Output<number | undefined>;
    public readonly comments!: pulumi.Output<string | undefined>;
    public readonly members!: pulumi.Output<string[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a ObjectFirewallVipgrp64 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ObjectFirewallVipgrp64Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectFirewallVipgrp64Args | ObjectFirewallVipgrp64State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectFirewallVipgrp64State | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["color"] = state ? state.color : undefined;
            resourceInputs["comments"] = state ? state.comments : undefined;
            resourceInputs["members"] = state ? state.members : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as ObjectFirewallVipgrp64Args | undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["color"] = args ? args.color : undefined;
            resourceInputs["comments"] = args ? args.comments : undefined;
            resourceInputs["members"] = args ? args.members : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectFirewallVipgrp64.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectFirewallVipgrp64 resources.
 */
export interface ObjectFirewallVipgrp64State {
    adom?: pulumi.Input<string>;
    color?: pulumi.Input<number>;
    comments?: pulumi.Input<string>;
    members?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectFirewallVipgrp64 resource.
 */
export interface ObjectFirewallVipgrp64Args {
    adom?: pulumi.Input<string>;
    color?: pulumi.Input<number>;
    comments?: pulumi.Input<string>;
    members?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
