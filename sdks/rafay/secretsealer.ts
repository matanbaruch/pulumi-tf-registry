// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Secretsealer extends pulumi.CustomResource {
    /**
     * Get an existing Secretsealer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecretsealerState, opts?: pulumi.CustomResourceOptions): Secretsealer {
        return new Secretsealer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'rafay:index/secretsealer:Secretsealer';

    /**
     * Returns true if the given object is an instance of Secretsealer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Secretsealer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Secretsealer.__pulumiType;
    }

    /**
     * Metadata of the secret sealer resource
     */
    public readonly metadata!: pulumi.Output<outputs.SecretsealerMetadata | undefined>;
    /**
     * Specification of the secret sealer resource
     */
    public readonly spec!: pulumi.Output<outputs.SecretsealerSpec | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.SecretsealerTimeouts | undefined>;

    /**
     * Create a Secretsealer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SecretsealerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecretsealerArgs | SecretsealerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SecretsealerState | undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["spec"] = state ? state.spec : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SecretsealerArgs | undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["spec"] = args ? args.spec : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Secretsealer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Secretsealer resources.
 */
export interface SecretsealerState {
    /**
     * Metadata of the secret sealer resource
     */
    metadata?: pulumi.Input<inputs.SecretsealerMetadata>;
    /**
     * Specification of the secret sealer resource
     */
    spec?: pulumi.Input<inputs.SecretsealerSpec>;
    timeouts?: pulumi.Input<inputs.SecretsealerTimeouts>;
}

/**
 * The set of arguments for constructing a Secretsealer resource.
 */
export interface SecretsealerArgs {
    /**
     * Metadata of the secret sealer resource
     */
    metadata?: pulumi.Input<inputs.SecretsealerMetadata>;
    /**
     * Specification of the secret sealer resource
     */
    spec?: pulumi.Input<inputs.SecretsealerSpec>;
    timeouts?: pulumi.Input<inputs.SecretsealerTimeouts>;
}
