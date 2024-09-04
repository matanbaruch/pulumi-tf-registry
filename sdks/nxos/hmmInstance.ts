// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class HmmInstance extends pulumi.CustomResource {
    /**
     * Get an existing HmmInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HmmInstanceState, opts?: pulumi.CustomResourceOptions): HmmInstance {
        return new HmmInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nxos:index/hmmInstance:HmmInstance';

    /**
     * Returns true if the given object is an instance of HmmInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HmmInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HmmInstance.__pulumiType;
    }

    /**
     * Administrative state. - Choices: `enabled`, `disabled` - Default value: `enabled`
     */
    public readonly adminState!: pulumi.Output<string>;
    /**
     * Anycast Gateway MAC address. - Default value: `enabled`
     */
    public readonly anycastMac!: pulumi.Output<string>;
    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;

    /**
     * Create a HmmInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: HmmInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HmmInstanceArgs | HmmInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as HmmInstanceState | undefined;
            resourceInputs["adminState"] = state ? state.adminState : undefined;
            resourceInputs["anycastMac"] = state ? state.anycastMac : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
        } else {
            const args = argsOrState as HmmInstanceArgs | undefined;
            resourceInputs["adminState"] = args ? args.adminState : undefined;
            resourceInputs["anycastMac"] = args ? args.anycastMac : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(HmmInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering HmmInstance resources.
 */
export interface HmmInstanceState {
    /**
     * Administrative state. - Choices: `enabled`, `disabled` - Default value: `enabled`
     */
    adminState?: pulumi.Input<string>;
    /**
     * Anycast Gateway MAC address. - Default value: `enabled`
     */
    anycastMac?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a HmmInstance resource.
 */
export interface HmmInstanceArgs {
    /**
     * Administrative state. - Choices: `enabled`, `disabled` - Default value: `enabled`
     */
    adminState?: pulumi.Input<string>;
    /**
     * Anycast Gateway MAC address. - Default value: `enabled`
     */
    anycastMac?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
}
