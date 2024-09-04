// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EmbeddingExample extends pulumi.CustomResource {
    /**
     * Get an existing EmbeddingExample resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EmbeddingExampleState, opts?: pulumi.CustomResourceOptions): EmbeddingExample {
        return new EmbeddingExample(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'helmfile:index/embeddingExample:EmbeddingExample';

    /**
     * Returns true if the given object is an instance of EmbeddingExample.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EmbeddingExample {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EmbeddingExample.__pulumiType;
    }

    public readonly embeddeds!: pulumi.Output<outputs.EmbeddingExampleEmbedded[] | undefined>;

    /**
     * Create a EmbeddingExample resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: EmbeddingExampleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EmbeddingExampleArgs | EmbeddingExampleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EmbeddingExampleState | undefined;
            resourceInputs["embeddeds"] = state ? state.embeddeds : undefined;
        } else {
            const args = argsOrState as EmbeddingExampleArgs | undefined;
            resourceInputs["embeddeds"] = args ? args.embeddeds : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EmbeddingExample.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EmbeddingExample resources.
 */
export interface EmbeddingExampleState {
    embeddeds?: pulumi.Input<pulumi.Input<inputs.EmbeddingExampleEmbedded>[]>;
}

/**
 * The set of arguments for constructing a EmbeddingExample resource.
 */
export interface EmbeddingExampleArgs {
    embeddeds?: pulumi.Input<pulumi.Input<inputs.EmbeddingExampleEmbedded>[]>;
}
