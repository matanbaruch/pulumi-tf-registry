// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Lsnpool extends pulumi.CustomResource {
    /**
     * Get an existing Lsnpool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LsnpoolState, opts?: pulumi.CustomResourceOptions): Lsnpool {
        return new Lsnpool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/lsnpool:Lsnpool';

    /**
     * Returns true if the given object is an instance of Lsnpool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Lsnpool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Lsnpool.__pulumiType;
    }

    public readonly maxportrealloctmq!: pulumi.Output<string>;
    public readonly nattype!: pulumi.Output<string | undefined>;
    public readonly poolname!: pulumi.Output<string>;
    public readonly portblockallocation!: pulumi.Output<string | undefined>;
    public readonly portrealloctimeout!: pulumi.Output<number>;

    /**
     * Create a Lsnpool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LsnpoolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LsnpoolArgs | LsnpoolState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LsnpoolState | undefined;
            resourceInputs["maxportrealloctmq"] = state ? state.maxportrealloctmq : undefined;
            resourceInputs["nattype"] = state ? state.nattype : undefined;
            resourceInputs["poolname"] = state ? state.poolname : undefined;
            resourceInputs["portblockallocation"] = state ? state.portblockallocation : undefined;
            resourceInputs["portrealloctimeout"] = state ? state.portrealloctimeout : undefined;
        } else {
            const args = argsOrState as LsnpoolArgs | undefined;
            if ((!args || args.poolname === undefined) && !opts.urn) {
                throw new Error("Missing required property 'poolname'");
            }
            resourceInputs["maxportrealloctmq"] = args ? args.maxportrealloctmq : undefined;
            resourceInputs["nattype"] = args ? args.nattype : undefined;
            resourceInputs["poolname"] = args ? args.poolname : undefined;
            resourceInputs["portblockallocation"] = args ? args.portblockallocation : undefined;
            resourceInputs["portrealloctimeout"] = args ? args.portrealloctimeout : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Lsnpool.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Lsnpool resources.
 */
export interface LsnpoolState {
    maxportrealloctmq?: pulumi.Input<string>;
    nattype?: pulumi.Input<string>;
    poolname?: pulumi.Input<string>;
    portblockallocation?: pulumi.Input<string>;
    portrealloctimeout?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Lsnpool resource.
 */
export interface LsnpoolArgs {
    maxportrealloctmq?: pulumi.Input<string>;
    nattype?: pulumi.Input<string>;
    poolname: pulumi.Input<string>;
    portblockallocation?: pulumi.Input<string>;
    portrealloctimeout?: pulumi.Input<number>;
}
