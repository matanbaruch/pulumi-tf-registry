// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class KeyRequests extends pulumi.CustomResource {
    /**
     * Get an existing KeyRequests resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KeyRequestsState, opts?: pulumi.CustomResourceOptions): KeyRequests {
        return new KeyRequests(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dynatrace:index/keyRequests:KeyRequests';

    /**
     * Returns true if the given object is an instance of KeyRequests.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KeyRequests {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KeyRequests.__pulumiType;
    }

    /**
     * The names of the key requests
     */
    public readonly names!: pulumi.Output<string[] | undefined>;
    /**
     * ID of Dynatrace Service, eg. SERVICE-123ABC45678EFGH
     */
    public readonly service!: pulumi.Output<string>;

    /**
     * Create a KeyRequests resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KeyRequestsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KeyRequestsArgs | KeyRequestsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KeyRequestsState | undefined;
            resourceInputs["names"] = state ? state.names : undefined;
            resourceInputs["service"] = state ? state.service : undefined;
        } else {
            const args = argsOrState as KeyRequestsArgs | undefined;
            if ((!args || args.service === undefined) && !opts.urn) {
                throw new Error("Missing required property 'service'");
            }
            resourceInputs["names"] = args ? args.names : undefined;
            resourceInputs["service"] = args ? args.service : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(KeyRequests.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KeyRequests resources.
 */
export interface KeyRequestsState {
    /**
     * The names of the key requests
     */
    names?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ID of Dynatrace Service, eg. SERVICE-123ABC45678EFGH
     */
    service?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a KeyRequests resource.
 */
export interface KeyRequestsArgs {
    /**
     * The names of the key requests
     */
    names?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ID of Dynatrace Service, eg. SERVICE-123ABC45678EFGH
     */
    service: pulumi.Input<string>;
}
