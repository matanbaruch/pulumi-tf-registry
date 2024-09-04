// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Hmm extends pulumi.CustomResource {
    /**
     * Get an existing Hmm resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HmmState, opts?: pulumi.CustomResourceOptions): Hmm {
        return new Hmm(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nxos:index/hmm:Hmm';

    /**
     * Returns true if the given object is an instance of Hmm.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Hmm {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Hmm.__pulumiType;
    }

    /**
     * Administrative state. - Choices: `enabled`, `disabled` - Default value: `enabled`
     */
    public readonly adminState!: pulumi.Output<string>;
    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;

    /**
     * Create a Hmm resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: HmmArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HmmArgs | HmmState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as HmmState | undefined;
            resourceInputs["adminState"] = state ? state.adminState : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
        } else {
            const args = argsOrState as HmmArgs | undefined;
            resourceInputs["adminState"] = args ? args.adminState : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Hmm.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Hmm resources.
 */
export interface HmmState {
    /**
     * Administrative state. - Choices: `enabled`, `disabled` - Default value: `enabled`
     */
    adminState?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Hmm resource.
 */
export interface HmmArgs {
    /**
     * Administrative state. - Choices: `enabled`, `disabled` - Default value: `enabled`
     */
    adminState?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
}
