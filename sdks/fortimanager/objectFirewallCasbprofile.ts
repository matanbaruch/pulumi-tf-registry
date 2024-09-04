// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ObjectFirewallCasbprofile extends pulumi.CustomResource {
    /**
     * Get an existing ObjectFirewallCasbprofile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectFirewallCasbprofileState, opts?: pulumi.CustomResourceOptions): ObjectFirewallCasbprofile {
        return new ObjectFirewallCasbprofile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectFirewallCasbprofile:ObjectFirewallCasbprofile';

    /**
     * Returns true if the given object is an instance of ObjectFirewallCasbprofile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectFirewallCasbprofile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectFirewallCasbprofile.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly saasApplications!: pulumi.Output<outputs.ObjectFirewallCasbprofileSaasApplication[] | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectFirewallCasbprofile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ObjectFirewallCasbprofileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectFirewallCasbprofileArgs | ObjectFirewallCasbprofileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectFirewallCasbprofileState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["saasApplications"] = state ? state.saasApplications : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
        } else {
            const args = argsOrState as ObjectFirewallCasbprofileArgs | undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["saasApplications"] = args ? args.saasApplications : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectFirewallCasbprofile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectFirewallCasbprofile resources.
 */
export interface ObjectFirewallCasbprofileState {
    adom?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    saasApplications?: pulumi.Input<pulumi.Input<inputs.ObjectFirewallCasbprofileSaasApplication>[]>;
    scopetype?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectFirewallCasbprofile resource.
 */
export interface ObjectFirewallCasbprofileArgs {
    adom?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    saasApplications?: pulumi.Input<pulumi.Input<inputs.ObjectFirewallCasbprofileSaasApplication>[]>;
    scopetype?: pulumi.Input<string>;
}
