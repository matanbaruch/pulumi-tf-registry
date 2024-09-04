// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class OpendistroDestination extends pulumi.CustomResource {
    /**
     * Get an existing OpendistroDestination resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OpendistroDestinationState, opts?: pulumi.CustomResourceOptions): OpendistroDestination {
        return new OpendistroDestination(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'elasticsearch:index/opendistroDestination:OpendistroDestination';

    /**
     * Returns true if the given object is an instance of OpendistroDestination.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OpendistroDestination {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OpendistroDestination.__pulumiType;
    }

    /**
     * The JSON body of the destination.
     */
    public readonly body!: pulumi.Output<string>;

    /**
     * Create a OpendistroDestination resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OpendistroDestinationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OpendistroDestinationArgs | OpendistroDestinationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OpendistroDestinationState | undefined;
            resourceInputs["body"] = state ? state.body : undefined;
        } else {
            const args = argsOrState as OpendistroDestinationArgs | undefined;
            if ((!args || args.body === undefined) && !opts.urn) {
                throw new Error("Missing required property 'body'");
            }
            resourceInputs["body"] = args ? args.body : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OpendistroDestination.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OpendistroDestination resources.
 */
export interface OpendistroDestinationState {
    /**
     * The JSON body of the destination.
     */
    body?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OpendistroDestination resource.
 */
export interface OpendistroDestinationArgs {
    /**
     * The JSON body of the destination.
     */
    body: pulumi.Input<string>;
}
