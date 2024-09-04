// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ObjectWafProfileUrlaccess extends pulumi.CustomResource {
    /**
     * Get an existing ObjectWafProfileUrlaccess resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectWafProfileUrlaccessState, opts?: pulumi.CustomResourceOptions): ObjectWafProfileUrlaccess {
        return new ObjectWafProfileUrlaccess(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectWafProfileUrlaccess:ObjectWafProfileUrlaccess';

    /**
     * Returns true if the given object is an instance of ObjectWafProfileUrlaccess.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectWafProfileUrlaccess {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectWafProfileUrlaccess.__pulumiType;
    }

    public readonly accessPatterns!: pulumi.Output<outputs.ObjectWafProfileUrlaccessAccessPattern[] | undefined>;
    public readonly action!: pulumi.Output<string>;
    public readonly address!: pulumi.Output<string | undefined>;
    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly log!: pulumi.Output<string>;
    public readonly profile!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly severity!: pulumi.Output<string>;

    /**
     * Create a ObjectWafProfileUrlaccess resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectWafProfileUrlaccessArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectWafProfileUrlaccessArgs | ObjectWafProfileUrlaccessState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectWafProfileUrlaccessState | undefined;
            resourceInputs["accessPatterns"] = state ? state.accessPatterns : undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["log"] = state ? state.log : undefined;
            resourceInputs["profile"] = state ? state.profile : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["severity"] = state ? state.severity : undefined;
        } else {
            const args = argsOrState as ObjectWafProfileUrlaccessArgs | undefined;
            if ((!args || args.profile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profile'");
            }
            resourceInputs["accessPatterns"] = args ? args.accessPatterns : undefined;
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["address"] = args ? args.address : undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["log"] = args ? args.log : undefined;
            resourceInputs["profile"] = args ? args.profile : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["severity"] = args ? args.severity : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectWafProfileUrlaccess.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectWafProfileUrlaccess resources.
 */
export interface ObjectWafProfileUrlaccessState {
    accessPatterns?: pulumi.Input<pulumi.Input<inputs.ObjectWafProfileUrlaccessAccessPattern>[]>;
    action?: pulumi.Input<string>;
    address?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    log?: pulumi.Input<string>;
    profile?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    severity?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectWafProfileUrlaccess resource.
 */
export interface ObjectWafProfileUrlaccessArgs {
    accessPatterns?: pulumi.Input<pulumi.Input<inputs.ObjectWafProfileUrlaccessAccessPattern>[]>;
    action?: pulumi.Input<string>;
    address?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    log?: pulumi.Input<string>;
    profile: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    severity?: pulumi.Input<string>;
}
