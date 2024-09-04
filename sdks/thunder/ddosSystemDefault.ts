// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DdosSystemDefault extends pulumi.CustomResource {
    /**
     * Get an existing DdosSystemDefault resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DdosSystemDefaultState, opts?: pulumi.CustomResourceOptions): DdosSystemDefault {
        return new DdosSystemDefault(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/ddosSystemDefault:DdosSystemDefault';

    /**
     * Returns true if the given object is an instance of DdosSystemDefault.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DdosSystemDefault {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DdosSystemDefault.__pulumiType;
    }

    public readonly limitLists!: pulumi.Output<outputs.DdosSystemDefaultLimitList[] | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a DdosSystemDefault resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DdosSystemDefaultArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DdosSystemDefaultArgs | DdosSystemDefaultState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DdosSystemDefaultState | undefined;
            resourceInputs["limitLists"] = state ? state.limitLists : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as DdosSystemDefaultArgs | undefined;
            resourceInputs["limitLists"] = args ? args.limitLists : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DdosSystemDefault.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DdosSystemDefault resources.
 */
export interface DdosSystemDefaultState {
    limitLists?: pulumi.Input<pulumi.Input<inputs.DdosSystemDefaultLimitList>[]>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DdosSystemDefault resource.
 */
export interface DdosSystemDefaultArgs {
    limitLists?: pulumi.Input<pulumi.Input<inputs.DdosSystemDefaultLimitList>[]>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
