// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ManagementOpsecApplication extends pulumi.CustomResource {
    /**
     * Get an existing ManagementOpsecApplication resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManagementOpsecApplicationState, opts?: pulumi.CustomResourceOptions): ManagementOpsecApplication {
        return new ManagementOpsecApplication(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'checkpoint:index/managementOpsecApplication:ManagementOpsecApplication';

    /**
     * Returns true if the given object is an instance of ManagementOpsecApplication.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagementOpsecApplication {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagementOpsecApplication.__pulumiType;
    }

    /**
     * Color of the object. Should be one of existing colors.
     */
    public readonly color!: pulumi.Output<string | undefined>;
    /**
     * Comments string.
     */
    public readonly comments!: pulumi.Output<string | undefined>;
    /**
     * Used to setup the CPMI client entity.
     */
    public readonly cpmi!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The host where the server is running. Pre-define the host as a network object.
     */
    public readonly host!: pulumi.Output<string | undefined>;
    /**
     * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted -
     * warnings will also be ignored.
     */
    public readonly ignoreErrors!: pulumi.Output<boolean | undefined>;
    /**
     * Apply changes ignoring warnings.
     */
    public readonly ignoreWarnings!: pulumi.Output<boolean | undefined>;
    /**
     * Used to setup the LEA client entity.
     */
    public readonly lea!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Object name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A password required for establishing a Secure Internal Communication (SIC).
     */
    public readonly oneTimePassword!: pulumi.Output<string | undefined>;
    /**
     * Collection of tag identifiers.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;

    /**
     * Create a ManagementOpsecApplication resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ManagementOpsecApplicationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ManagementOpsecApplicationArgs | ManagementOpsecApplicationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ManagementOpsecApplicationState | undefined;
            resourceInputs["color"] = state ? state.color : undefined;
            resourceInputs["comments"] = state ? state.comments : undefined;
            resourceInputs["cpmi"] = state ? state.cpmi : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["ignoreErrors"] = state ? state.ignoreErrors : undefined;
            resourceInputs["ignoreWarnings"] = state ? state.ignoreWarnings : undefined;
            resourceInputs["lea"] = state ? state.lea : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["oneTimePassword"] = state ? state.oneTimePassword : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as ManagementOpsecApplicationArgs | undefined;
            resourceInputs["color"] = args ? args.color : undefined;
            resourceInputs["comments"] = args ? args.comments : undefined;
            resourceInputs["cpmi"] = args ? args.cpmi : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["ignoreErrors"] = args ? args.ignoreErrors : undefined;
            resourceInputs["ignoreWarnings"] = args ? args.ignoreWarnings : undefined;
            resourceInputs["lea"] = args ? args.lea : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["oneTimePassword"] = args?.oneTimePassword ? pulumi.secret(args.oneTimePassword) : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["oneTimePassword"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ManagementOpsecApplication.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ManagementOpsecApplication resources.
 */
export interface ManagementOpsecApplicationState {
    /**
     * Color of the object. Should be one of existing colors.
     */
    color?: pulumi.Input<string>;
    /**
     * Comments string.
     */
    comments?: pulumi.Input<string>;
    /**
     * Used to setup the CPMI client entity.
     */
    cpmi?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The host where the server is running. Pre-define the host as a network object.
     */
    host?: pulumi.Input<string>;
    /**
     * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted -
     * warnings will also be ignored.
     */
    ignoreErrors?: pulumi.Input<boolean>;
    /**
     * Apply changes ignoring warnings.
     */
    ignoreWarnings?: pulumi.Input<boolean>;
    /**
     * Used to setup the LEA client entity.
     */
    lea?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Object name.
     */
    name?: pulumi.Input<string>;
    /**
     * A password required for establishing a Secure Internal Communication (SIC).
     */
    oneTimePassword?: pulumi.Input<string>;
    /**
     * Collection of tag identifiers.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ManagementOpsecApplication resource.
 */
export interface ManagementOpsecApplicationArgs {
    /**
     * Color of the object. Should be one of existing colors.
     */
    color?: pulumi.Input<string>;
    /**
     * Comments string.
     */
    comments?: pulumi.Input<string>;
    /**
     * Used to setup the CPMI client entity.
     */
    cpmi?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The host where the server is running. Pre-define the host as a network object.
     */
    host?: pulumi.Input<string>;
    /**
     * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted -
     * warnings will also be ignored.
     */
    ignoreErrors?: pulumi.Input<boolean>;
    /**
     * Apply changes ignoring warnings.
     */
    ignoreWarnings?: pulumi.Input<boolean>;
    /**
     * Used to setup the LEA client entity.
     */
    lea?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Object name.
     */
    name?: pulumi.Input<string>;
    /**
     * A password required for establishing a Secure Internal Communication (SIC).
     */
    oneTimePassword?: pulumi.Input<string>;
    /**
     * Collection of tag identifiers.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}
