// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SshKeypair extends pulumi.CustomResource {
    /**
     * Get an existing SshKeypair resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SshKeypairState, opts?: pulumi.CustomResourceOptions): SshKeypair {
        return new SshKeypair(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ecloud:index/sshKeypair:SshKeypair';

    /**
     * Returns true if the given object is an instance of SshKeypair.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SshKeypair {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SshKeypair.__pulumiType;
    }

    public readonly name!: pulumi.Output<string>;
    public readonly publicKey!: pulumi.Output<string>;

    /**
     * Create a SshKeypair resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SshKeypairArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SshKeypairArgs | SshKeypairState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SshKeypairState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["publicKey"] = state ? state.publicKey : undefined;
        } else {
            const args = argsOrState as SshKeypairArgs | undefined;
            if ((!args || args.publicKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'publicKey'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["publicKey"] = args ? args.publicKey : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SshKeypair.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SshKeypair resources.
 */
export interface SshKeypairState {
    name?: pulumi.Input<string>;
    publicKey?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SshKeypair resource.
 */
export interface SshKeypairArgs {
    name?: pulumi.Input<string>;
    publicKey: pulumi.Input<string>;
}
