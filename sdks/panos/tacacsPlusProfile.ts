// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class TacacsPlusProfile extends pulumi.CustomResource {
    /**
     * Get an existing TacacsPlusProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TacacsPlusProfileState, opts?: pulumi.CustomResourceOptions): TacacsPlusProfile {
        return new TacacsPlusProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'panos:index/tacacsPlusProfile:TacacsPlusProfile';

    /**
     * Returns true if the given object is an instance of TacacsPlusProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TacacsPlusProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TacacsPlusProfile.__pulumiType;
    }

    /**
     * Administrator use only.
     */
    public readonly adminUseOnly!: pulumi.Output<boolean | undefined>;
    /**
     * The name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Authentication protocol settings.
     */
    public readonly protocol!: pulumi.Output<outputs.TacacsPlusProfileProtocol>;
    /**
     * Server secrets, encrypted.
     */
    public /*out*/ readonly secretsEnc!: pulumi.Output<{[key: string]: string}>;
    /**
     * Server secrets, raw.
     */
    public /*out*/ readonly secretsRaw!: pulumi.Output<{[key: string]: string}>;
    /**
     * List of TACACS+ servers.
     */
    public readonly servers!: pulumi.Output<outputs.TacacsPlusProfileServer[] | undefined>;
    /**
     * The template.
     */
    public readonly template!: pulumi.Output<string | undefined>;
    /**
     * The template stack.
     */
    public readonly templateStack!: pulumi.Output<string | undefined>;
    /**
     * Timeout (in sec).
     */
    public readonly timeout!: pulumi.Output<number | undefined>;
    /**
     * Use single connection for all authentication.
     */
    public readonly useSingleConnection!: pulumi.Output<boolean | undefined>;
    /**
     * The vsys this object belongs in.
     */
    public readonly vsys!: pulumi.Output<string | undefined>;

    /**
     * Create a TacacsPlusProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TacacsPlusProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TacacsPlusProfileArgs | TacacsPlusProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TacacsPlusProfileState | undefined;
            resourceInputs["adminUseOnly"] = state ? state.adminUseOnly : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["secretsEnc"] = state ? state.secretsEnc : undefined;
            resourceInputs["secretsRaw"] = state ? state.secretsRaw : undefined;
            resourceInputs["servers"] = state ? state.servers : undefined;
            resourceInputs["template"] = state ? state.template : undefined;
            resourceInputs["templateStack"] = state ? state.templateStack : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
            resourceInputs["useSingleConnection"] = state ? state.useSingleConnection : undefined;
            resourceInputs["vsys"] = state ? state.vsys : undefined;
        } else {
            const args = argsOrState as TacacsPlusProfileArgs | undefined;
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            resourceInputs["adminUseOnly"] = args ? args.adminUseOnly : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["servers"] = args ? args.servers : undefined;
            resourceInputs["template"] = args ? args.template : undefined;
            resourceInputs["templateStack"] = args ? args.templateStack : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
            resourceInputs["useSingleConnection"] = args ? args.useSingleConnection : undefined;
            resourceInputs["vsys"] = args ? args.vsys : undefined;
            resourceInputs["secretsEnc"] = undefined /*out*/;
            resourceInputs["secretsRaw"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["secretsEnc", "secretsRaw"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(TacacsPlusProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TacacsPlusProfile resources.
 */
export interface TacacsPlusProfileState {
    /**
     * Administrator use only.
     */
    adminUseOnly?: pulumi.Input<boolean>;
    /**
     * The name.
     */
    name?: pulumi.Input<string>;
    /**
     * Authentication protocol settings.
     */
    protocol?: pulumi.Input<inputs.TacacsPlusProfileProtocol>;
    /**
     * Server secrets, encrypted.
     */
    secretsEnc?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Server secrets, raw.
     */
    secretsRaw?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * List of TACACS+ servers.
     */
    servers?: pulumi.Input<pulumi.Input<inputs.TacacsPlusProfileServer>[]>;
    /**
     * The template.
     */
    template?: pulumi.Input<string>;
    /**
     * The template stack.
     */
    templateStack?: pulumi.Input<string>;
    /**
     * Timeout (in sec).
     */
    timeout?: pulumi.Input<number>;
    /**
     * Use single connection for all authentication.
     */
    useSingleConnection?: pulumi.Input<boolean>;
    /**
     * The vsys this object belongs in.
     */
    vsys?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TacacsPlusProfile resource.
 */
export interface TacacsPlusProfileArgs {
    /**
     * Administrator use only.
     */
    adminUseOnly?: pulumi.Input<boolean>;
    /**
     * The name.
     */
    name?: pulumi.Input<string>;
    /**
     * Authentication protocol settings.
     */
    protocol: pulumi.Input<inputs.TacacsPlusProfileProtocol>;
    /**
     * List of TACACS+ servers.
     */
    servers?: pulumi.Input<pulumi.Input<inputs.TacacsPlusProfileServer>[]>;
    /**
     * The template.
     */
    template?: pulumi.Input<string>;
    /**
     * The template stack.
     */
    templateStack?: pulumi.Input<string>;
    /**
     * Timeout (in sec).
     */
    timeout?: pulumi.Input<number>;
    /**
     * Use single connection for all authentication.
     */
    useSingleConnection?: pulumi.Input<boolean>;
    /**
     * The vsys this object belongs in.
     */
    vsys?: pulumi.Input<string>;
}
