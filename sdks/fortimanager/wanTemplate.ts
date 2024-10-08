// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class WanTemplate extends pulumi.CustomResource {
    /**
     * Get an existing WanTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WanTemplateState, opts?: pulumi.CustomResourceOptions): WanTemplate {
        return new WanTemplate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/wanTemplate:WanTemplate';

    /**
     * Returns true if the given object is an instance of WanTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WanTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WanTemplate.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly oid!: pulumi.Output<number>;
    public readonly scopemembers!: pulumi.Output<outputs.WanTemplateScopemember[] | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a WanTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WanTemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WanTemplateArgs | WanTemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WanTemplateState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["oid"] = state ? state.oid : undefined;
            resourceInputs["scopemembers"] = state ? state.scopemembers : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as WanTemplateArgs | undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["oid"] = args ? args.oid : undefined;
            resourceInputs["scopemembers"] = args ? args.scopemembers : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WanTemplate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WanTemplate resources.
 */
export interface WanTemplateState {
    adom?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    oid?: pulumi.Input<number>;
    scopemembers?: pulumi.Input<pulumi.Input<inputs.WanTemplateScopemember>[]>;
    scopetype?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WanTemplate resource.
 */
export interface WanTemplateArgs {
    adom?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    oid?: pulumi.Input<number>;
    scopemembers?: pulumi.Input<pulumi.Input<inputs.WanTemplateScopemember>[]>;
    scopetype?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}
