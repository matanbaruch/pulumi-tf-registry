// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectCliTemplategroup extends pulumi.CustomResource {
    /**
     * Get an existing ObjectCliTemplategroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectCliTemplategroupState, opts?: pulumi.CustomResourceOptions): ObjectCliTemplategroup {
        return new ObjectCliTemplategroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectCliTemplategroup:ObjectCliTemplategroup';

    /**
     * Returns true if the given object is an instance of ObjectCliTemplategroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectCliTemplategroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectCliTemplategroup.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly members!: pulumi.Output<string[]>;
    public readonly modificationTime!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly variables!: pulumi.Output<string[]>;

    /**
     * Create a ObjectCliTemplategroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ObjectCliTemplategroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectCliTemplategroupArgs | ObjectCliTemplategroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectCliTemplategroupState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["members"] = state ? state.members : undefined;
            resourceInputs["modificationTime"] = state ? state.modificationTime : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["variables"] = state ? state.variables : undefined;
        } else {
            const args = argsOrState as ObjectCliTemplategroupArgs | undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["members"] = args ? args.members : undefined;
            resourceInputs["modificationTime"] = args ? args.modificationTime : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["variables"] = args ? args.variables : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectCliTemplategroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectCliTemplategroup resources.
 */
export interface ObjectCliTemplategroupState {
    adom?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    members?: pulumi.Input<pulumi.Input<string>[]>;
    modificationTime?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    variables?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ObjectCliTemplategroup resource.
 */
export interface ObjectCliTemplategroupArgs {
    adom?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    members?: pulumi.Input<pulumi.Input<string>[]>;
    modificationTime?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    variables?: pulumi.Input<pulumi.Input<string>[]>;
}
