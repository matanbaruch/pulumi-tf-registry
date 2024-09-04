// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SlbSslExpireCheck extends pulumi.CustomResource {
    /**
     * Get an existing SlbSslExpireCheck resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SlbSslExpireCheckState, opts?: pulumi.CustomResourceOptions): SlbSslExpireCheck {
        return new SlbSslExpireCheck(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/slbSslExpireCheck:SlbSslExpireCheck';

    /**
     * Returns true if the given object is an instance of SlbSslExpireCheck.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SlbSslExpireCheck {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SlbSslExpireCheck.__pulumiType;
    }

    /**
     * The number of days in advance notice before expiration, default is 5
     */
    public readonly before!: pulumi.Output<number | undefined>;
    public readonly exception!: pulumi.Output<outputs.SlbSslExpireCheckException | undefined>;
    /**
     * Email address for certificate expiration check
     */
    public readonly expireAddress1!: pulumi.Output<string | undefined>;
    /**
     * The interval of days notice after expiration, default is 2
     */
    public readonly intervalDays!: pulumi.Output<number | undefined>;
    /**
     * Config Email address for certificate expiration check
     */
    public readonly sslExpireEmailAddress!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a SlbSslExpireCheck resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SlbSslExpireCheckArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SlbSslExpireCheckArgs | SlbSslExpireCheckState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SlbSslExpireCheckState | undefined;
            resourceInputs["before"] = state ? state.before : undefined;
            resourceInputs["exception"] = state ? state.exception : undefined;
            resourceInputs["expireAddress1"] = state ? state.expireAddress1 : undefined;
            resourceInputs["intervalDays"] = state ? state.intervalDays : undefined;
            resourceInputs["sslExpireEmailAddress"] = state ? state.sslExpireEmailAddress : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as SlbSslExpireCheckArgs | undefined;
            resourceInputs["before"] = args ? args.before : undefined;
            resourceInputs["exception"] = args ? args.exception : undefined;
            resourceInputs["expireAddress1"] = args ? args.expireAddress1 : undefined;
            resourceInputs["intervalDays"] = args ? args.intervalDays : undefined;
            resourceInputs["sslExpireEmailAddress"] = args ? args.sslExpireEmailAddress : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SlbSslExpireCheck.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SlbSslExpireCheck resources.
 */
export interface SlbSslExpireCheckState {
    /**
     * The number of days in advance notice before expiration, default is 5
     */
    before?: pulumi.Input<number>;
    exception?: pulumi.Input<inputs.SlbSslExpireCheckException>;
    /**
     * Email address for certificate expiration check
     */
    expireAddress1?: pulumi.Input<string>;
    /**
     * The interval of days notice after expiration, default is 2
     */
    intervalDays?: pulumi.Input<number>;
    /**
     * Config Email address for certificate expiration check
     */
    sslExpireEmailAddress?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SlbSslExpireCheck resource.
 */
export interface SlbSslExpireCheckArgs {
    /**
     * The number of days in advance notice before expiration, default is 5
     */
    before?: pulumi.Input<number>;
    exception?: pulumi.Input<inputs.SlbSslExpireCheckException>;
    /**
     * Email address for certificate expiration check
     */
    expireAddress1?: pulumi.Input<string>;
    /**
     * The interval of days notice after expiration, default is 2
     */
    intervalDays?: pulumi.Input<number>;
    /**
     * Config Email address for certificate expiration check
     */
    sslExpireEmailAddress?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
