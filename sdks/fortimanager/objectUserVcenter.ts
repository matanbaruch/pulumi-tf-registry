// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ObjectUserVcenter extends pulumi.CustomResource {
    /**
     * Get an existing ObjectUserVcenter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectUserVcenterState, opts?: pulumi.CustomResourceOptions): ObjectUserVcenter {
        return new ObjectUserVcenter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectUserVcenter:ObjectUserVcenter';

    /**
     * Returns true if the given object is an instance of ObjectUserVcenter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectUserVcenter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectUserVcenter.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly passwords!: pulumi.Output<string[]>;
    public readonly rules!: pulumi.Output<outputs.ObjectUserVcenterRule[] | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly server!: pulumi.Output<string | undefined>;
    public readonly status!: pulumi.Output<string>;
    public readonly updInterval!: pulumi.Output<number>;
    public readonly user!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectUserVcenter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ObjectUserVcenterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectUserVcenterArgs | ObjectUserVcenterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectUserVcenterState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["passwords"] = state ? state.passwords : undefined;
            resourceInputs["rules"] = state ? state.rules : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["server"] = state ? state.server : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["updInterval"] = state ? state.updInterval : undefined;
            resourceInputs["user"] = state ? state.user : undefined;
        } else {
            const args = argsOrState as ObjectUserVcenterArgs | undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["passwords"] = args?.passwords ? pulumi.secret(args.passwords) : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["server"] = args ? args.server : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["updInterval"] = args ? args.updInterval : undefined;
            resourceInputs["user"] = args ? args.user : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["passwords"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ObjectUserVcenter.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectUserVcenter resources.
 */
export interface ObjectUserVcenterState {
    adom?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    passwords?: pulumi.Input<pulumi.Input<string>[]>;
    rules?: pulumi.Input<pulumi.Input<inputs.ObjectUserVcenterRule>[]>;
    scopetype?: pulumi.Input<string>;
    server?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    updInterval?: pulumi.Input<number>;
    user?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectUserVcenter resource.
 */
export interface ObjectUserVcenterArgs {
    adom?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    passwords?: pulumi.Input<pulumi.Input<string>[]>;
    rules?: pulumi.Input<pulumi.Input<inputs.ObjectUserVcenterRule>[]>;
    scopetype?: pulumi.Input<string>;
    server?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    updInterval?: pulumi.Input<number>;
    user?: pulumi.Input<string>;
}
