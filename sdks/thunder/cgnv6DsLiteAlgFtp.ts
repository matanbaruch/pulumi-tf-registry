// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Cgnv6DsLiteAlgFtp extends pulumi.CustomResource {
    /**
     * Get an existing Cgnv6DsLiteAlgFtp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Cgnv6DsLiteAlgFtpState, opts?: pulumi.CustomResourceOptions): Cgnv6DsLiteAlgFtp {
        return new Cgnv6DsLiteAlgFtp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/cgnv6DsLiteAlgFtp:Cgnv6DsLiteAlgFtp';

    /**
     * Returns true if the given object is an instance of Cgnv6DsLiteAlgFtp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cgnv6DsLiteAlgFtp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cgnv6DsLiteAlgFtp.__pulumiType;
    }

    /**
     * 'disable': Disable ALG;
     */
    public readonly ftpEnable!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a Cgnv6DsLiteAlgFtp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Cgnv6DsLiteAlgFtpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Cgnv6DsLiteAlgFtpArgs | Cgnv6DsLiteAlgFtpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Cgnv6DsLiteAlgFtpState | undefined;
            resourceInputs["ftpEnable"] = state ? state.ftpEnable : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as Cgnv6DsLiteAlgFtpArgs | undefined;
            resourceInputs["ftpEnable"] = args ? args.ftpEnable : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cgnv6DsLiteAlgFtp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Cgnv6DsLiteAlgFtp resources.
 */
export interface Cgnv6DsLiteAlgFtpState {
    /**
     * 'disable': Disable ALG;
     */
    ftpEnable?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Cgnv6DsLiteAlgFtp resource.
 */
export interface Cgnv6DsLiteAlgFtpArgs {
    /**
     * 'disable': Disable ALG;
     */
    ftpEnable?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
