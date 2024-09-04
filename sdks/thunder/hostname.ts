// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Hostname extends pulumi.CustomResource {
    /**
     * Get an existing Hostname resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HostnameState, opts?: pulumi.CustomResourceOptions): Hostname {
        return new Hostname(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/hostname:Hostname';

    /**
     * Returns true if the given object is an instance of Hostname.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Hostname {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Hostname.__pulumiType;
    }

    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    /**
     * This System's Network Name
     */
    public readonly value!: pulumi.Output<string | undefined>;

    /**
     * Create a Hostname resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: HostnameArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HostnameArgs | HostnameState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as HostnameState | undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["value"] = state ? state.value : undefined;
        } else {
            const args = argsOrState as HostnameArgs | undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Hostname.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Hostname resources.
 */
export interface HostnameState {
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * This System's Network Name
     */
    value?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Hostname resource.
 */
export interface HostnameArgs {
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * This System's Network Name
     */
    value?: pulumi.Input<string>;
}
