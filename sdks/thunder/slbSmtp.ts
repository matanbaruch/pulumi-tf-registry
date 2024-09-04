// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SlbSmtp extends pulumi.CustomResource {
    /**
     * Get an existing SlbSmtp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SlbSmtpState, opts?: pulumi.CustomResourceOptions): SlbSmtp {
        return new SlbSmtp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/slbSmtp:SlbSmtp';

    /**
     * Returns true if the given object is an instance of SlbSmtp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SlbSmtp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SlbSmtp.__pulumiType;
    }

    public readonly samplingEnables!: pulumi.Output<outputs.SlbSmtpSamplingEnable[] | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a SlbSmtp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SlbSmtpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SlbSmtpArgs | SlbSmtpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SlbSmtpState | undefined;
            resourceInputs["samplingEnables"] = state ? state.samplingEnables : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as SlbSmtpArgs | undefined;
            resourceInputs["samplingEnables"] = args ? args.samplingEnables : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SlbSmtp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SlbSmtp resources.
 */
export interface SlbSmtpState {
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.SlbSmtpSamplingEnable>[]>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SlbSmtp resource.
 */
export interface SlbSmtpArgs {
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.SlbSmtpSamplingEnable>[]>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
