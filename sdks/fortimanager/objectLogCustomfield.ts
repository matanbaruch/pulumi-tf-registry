// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectLogCustomfield extends pulumi.CustomResource {
    /**
     * Get an existing ObjectLogCustomfield resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectLogCustomfieldState, opts?: pulumi.CustomResourceOptions): ObjectLogCustomfield {
        return new ObjectLogCustomfield(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectLogCustomfield:ObjectLogCustomfield';

    /**
     * Returns true if the given object is an instance of ObjectLogCustomfield.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectLogCustomfield {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectLogCustomfield.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly fosid!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly value!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectLogCustomfield resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ObjectLogCustomfieldArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectLogCustomfieldArgs | ObjectLogCustomfieldState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectLogCustomfieldState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["value"] = state ? state.value : undefined;
        } else {
            const args = argsOrState as ObjectLogCustomfieldArgs | undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectLogCustomfield.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectLogCustomfield resources.
 */
export interface ObjectLogCustomfieldState {
    adom?: pulumi.Input<string>;
    fosid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    value?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectLogCustomfield resource.
 */
export interface ObjectLogCustomfieldArgs {
    adom?: pulumi.Input<string>;
    fosid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    value?: pulumi.Input<string>;
}
